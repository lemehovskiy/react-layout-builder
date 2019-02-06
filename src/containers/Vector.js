import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

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
    constructor(props) {
        super(props);

    }

    onMouseUp(e) {
        let objectMoved = this.props.mouseStartPosition.x !== e.clientX || this.props.mouseStartPosition.y !== e.clientY;

        if (!e.shiftKey && !objectMoved) {
            this.props.deselectAllObjectsExept(this.props.object.id);
        }
    }


    onMouseDown(e) {
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
        return React.cloneElement(this.props.children, {onMouseUp: this.onMouseUp.bind(this), onMouseDown: this.onMouseDown.bind(this), object: this.props.object})

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
