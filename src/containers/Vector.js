import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import EditModeHelper from './EditModeHelper.js';

import {
    updateHandlerObjectIndex,
    updateEditMode,
    setMouseStartPosition,
    setObjectsSelectState,
    deselectAllObjects,
    setEditStartPositionOffset,
    deselectAllObjectsExept
} from '../../src/modules/svgRender'


class Vector extends React.Component {
    onMouseUp(e) {
        console.log('onMouseUp');
        let objectMoved = this.props.mouseStartPosition.x !== e.clientX || this.props.mouseStartPosition.y !== e.clientY;

        if (!e.shiftKey && !objectMoved) {
            this.props.deselectAllObjectsExept(this.props.object.id);
        }
    }


    onMouseDown(e) {
        console.log('mouseDown');
        if (!e.shiftKey && !this.props.object.selected) {
            this.props.deselectAllObjects();
        }

        this.props.setObjectsSelectState([this.props.object.id], true)
        this.props.setMouseStartPosition(e.clientX, e.clientY)

        //TODO rename setEditStartPositionOffset to setObjectEditStartPosition
        this.props.setEditStartPositionOffset(e.clientX, e.clientY);
        this.props.updateEditMode('drag')
    }

    render() {
        return (
            <g>
                <rect
                    width={this.props.object.width}
                    height={this.props.object.height}
                    x={this.props.object.x}
                    y={this.props.object.y}
                    cursor="move"
                    onMouseDown={this.onMouseDown.bind(this)}
                    onMouseUp={this.onMouseUp.bind(this)}
                />

                {this.props.object.selected ? <EditModeHelper
                    objectID={this.props.object.id}
                    width={this.props.object.width}
                    height={this.props.object.height}
                    x={this.props.object.x}
                    y={this.props.object.y}/> : ''}
            </g>
        )
    }
}

const mapStateToProps = ({svgRender}) => ({
    mouseStartPosition: svgRender.mouseStartPosition
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            updateHandlerObjectIndex,
            updateEditMode,
            setMouseStartPosition,
            setObjectsSelectState,
            deselectAllObjects,
            setEditStartPositionOffset,
            deselectAllObjectsExept
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Vector)
