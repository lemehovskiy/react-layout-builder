import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import toolPanelStyle from './../index.module.scss';
import toolPanelVectorStyle from './Figures.module.scss';

import {setLayoutBuilderMode} from "../../../actions/layoutBuilderActions"

class Figures extends React.Component {
    constructor(props) {
        super(props);
    }

    handleFigureClick(){
        this.props.setLayoutBuilderMode('dragNewFigure')
    }

    render() {

        return (
            <div className={`${toolPanelStyle['tool-panel-block']} ${toolPanelStyle['tool-panel-block-figures']}`}>
                <div className={toolPanelStyle['tool-panel-block__name']}>
                    Figures
                </div>

                <div>
                    <input className={`${toolPanelVectorStyle['rectangle']}`} type="button"
                           onMouseDown={this.handleFigureClick.bind(this)} name="rectangle"/>
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
            setLayoutBuilderMode
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Figures)
