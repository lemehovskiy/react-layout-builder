import React from 'react'
import ReactDOM from 'react-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import toolPanelStyle from './../index.module.scss';
import toolPanelFiguresrStyle from './Figures.module.scss';

import {setNewFigureDragData} from "../../../actions/layoutBuilderActions"

class Figures extends React.Component {
    constructor(props) {
        super(props);
    }

    handleFigureClick(refName, e){
        let clientRect = ReactDOM.findDOMNode(this.refs[refName]).getBoundingClientRect();

        this.props.setNewFigureDragData({
            figureType: refName,
            figureOffset: {
                x: clientRect.left - e.clientX,
                y: clientRect.top - e.clientY
            }
        })
    }

    render() {

        return (
            <div className={`${toolPanelStyle['tool-panel-block']} ${toolPanelStyle['tool-panel-block-figures']}`}>
                <div className={toolPanelStyle['tool-panel-block__name']}>
                    Figures
                </div>

                <div>
                    <input className={`${toolPanelFiguresrStyle['rectangle']}`} type="button"
                           onMouseDown={this.handleFigureClick.bind(this, 'rectangle')} ref="rectangle"/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            setNewFigureDragData
        },
        dispatch
    )

export default connect(
    null,
    mapDispatchToProps
)(Figures)
