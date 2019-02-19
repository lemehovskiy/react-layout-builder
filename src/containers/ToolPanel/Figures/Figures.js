import React from 'react'
import ReactDOM from 'react-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import toolPanelStyle from './../index.module.scss';
import toolPanelFiguresrStyle from './Figures.module.scss';

import {setLayoutBuilderMode} from "../../../actions/layoutBuilderActions"

class Figures extends React.Component {
    constructor(props) {
        super(props);
    }

    handleFigureClick(refName, e){

        console.log(refName);
        this.props.setLayoutBuilderMode('dragNewFigure')

        // var rect = ReactDOM.findDOMNode(this)
        //     .getBoundingClientRect()

        console.log(ReactDOM
            .findDOMNode(this.refs['rectangle'])
            .getBoundingClientRect())
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
