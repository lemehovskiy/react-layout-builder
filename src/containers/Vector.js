import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import EditModeHelper from './EditModeHelper.js';

import {
    updateHandlerObjectIndex,
    updateEditMode,
    setEditStartPoint,
    updateObjectSelectState,
    deselectAllObjects,
    setEditStartPositionOffset,
    deselectAllObjectsExept
} from '../../src/modules/svgRender'


class Vector extends React.Component {

    constructor(props) {
        super(props);

    }

    onMouseUp(e) {
        console.log('onMouseUp');
        let objectMoved = this.props.editStartPoint.x != e.clientX || this.props.editStartPoint.y != e.clientY;

        if (!e.shiftKey && !objectMoved) {
            this.props.deselectAllObjectsExept(this.props.object.id);
        }
    }


    onMouseDown(e) {
        console.log('mouseDown');
        if (!e.shiftKey && !this.props.object.selected) {
            this.props.deselectAllObjects();
        }

        this.props.updateObjectSelectState(this.props.object.id, true)
        this.props.setEditStartPoint(e.clientX, e.clientY)
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
                    onClick={this.onMouseClick.bind(this)}
                    cursor="move"
                    onMouseDown={this.onMouseDown.bind(this)}
                    onMouseUp={this.onMouseUp.bind(this)}
                />

                {this.props.object.selected ? <EditModeHelper width={this.props.object.width}
                                                              height={this.props.object.height}
                                                              x={this.props.object.x}
                                                              y={this.props.object.y}/> : ''}
            </g>
        )
    }
}

const mapStateToProps = ({svgRender}) => ({
    editStartPoint: svgRender.editStartPoint
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            updateHandlerObjectIndex,
            updateEditMode,
            setEditStartPoint,
            updateObjectSelectState,
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
