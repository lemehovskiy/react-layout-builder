import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import EditModeHelper from './EditModeHelper.js';

import {
    updateHandlerObjectIndex,
    updateEditMode,
    setEditStartPoint,
    updateObjectSelectState,
    deselectAllObjects
} from '../../src/modules/svgRender'


class Vector extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            onHoverMode: false,
            onSelectMode: false,
            onDragMode: false,
            x: this.props.object.x,
            y: this.props.object.y
        }
    }


    onMouseClick(event) {
        if (!event.shiftKey) {
            this.props.deselectAllObjects();
        }
        this.props.updateObjectSelectState(this.props.object.id, true)
        this.setState({
            onSelectMode: true
        })
    }

    onMouseDown(e) {
        this.props.setEditStartPoint(e.clientX, e.clientY)
        this.props.updateEditMode('drag')
    }

    render() {
        return (
            <g>
                <rect
                    width={this.props.object.width}
                    height={this.props.object.height}
                    x={this.state.x}
                    y={this.state.y}
                    onClick={this.onMouseClick.bind(this)}
                    cursor="move"
                    onMouseDown={this.onMouseDown.bind(this)}
                />

                {this.props.object.selected ? <EditModeHelper width={this.props.object.width}
                                                           height={this.props.object.height}
                                                           x={this.props.object.x}
                                                           y={this.props.object.y}/> : ''}
            </g>
        )
    }
}

const mapStateToProps = ({svgRender}) => ({})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            updateHandlerObjectIndex,
            updateEditMode,
            setEditStartPoint,
            updateObjectSelectState,
            deselectAllObjects
        },
        dispatch
    )

export default connect(
    null,
    mapDispatchToProps
)(Vector)
