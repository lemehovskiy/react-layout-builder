import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import toolPanelStyle from './../index.module.scss';

class Figures extends React.Component {

    constructor(props) {
        super(props);
    }
    

    render() {

        return (
            <div className={`${toolPanelStyle['tool-panel-block']} ${toolPanelStyle['tool-panel-block-figures']}`}>
                <div className={toolPanelStyle['tool-panel-block__name']}>
                    Figures
                </div>

                <div>
                    
                </div>

            </div>
        )
    }
}

const mapStateToProps = ({svgRender}) => ({
    selectedObjects: svgRender.objects.filter(object => svgRender.selectedObjectsId.includes(object.id)),
    selectedObjectsId: svgRender.selectedObjectsId
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({

        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Figures)
