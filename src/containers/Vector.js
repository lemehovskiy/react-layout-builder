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
    setEditStartPositionOffset
} from '../../src/modules/svgRender'


class Vector extends React.Component {

    constructor(props) {
        super(props);
    }


    onMouseClick(e) {
        if (!e.shiftKey) {
            this.props.deselectAllObjects();
        }
        this.props.updateObjectSelectState(this.props.object.id, true)
    }

    onMouseDown(e) {

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
            deselectAllObjects,
            setEditStartPositionOffset
        },
        dispatch
    )

export default connect(
    null,
    mapDispatchToProps
)(Vector)
