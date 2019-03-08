import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {
    updateEditMode,
    setMouseStartPosition,
    selectObjects,
    deselectAllObjects,
    setSelectedObjectsEditStartPosition,
    deselectAllObjectsExept
} from '../../actions/index'

const Vector = (props) => {

    const onMouseUp = (e) => {
        const {object, mouseStartPosition, deselectAllObjectsExept} = props;
        let objectMoved = mouseStartPosition.x !== e.clientX || mouseStartPosition.y !== e.clientY;

        if (!e.shiftKey && !objectMoved) {
            deselectAllObjectsExept(object.id);
        }
    }

    const onMouseDown = (e) => {

        const {object, selectObjects, selectedObjectsId, deselectAllObjects, setSelectedObjectsEditStartPosition} = props;
        const objectSelected = selectedObjectsId.includes(object.id);

        if (!e.shiftKey && !objectSelected) {
            deselectAllObjects();
        }
        if (!objectSelected) {
            selectObjects([object.id])
        }

        //TODO move setSelectedObjectsEditStartPosition to DraggableObject
        setSelectedObjectsEditStartPosition(e.clientX, e.clientY);
        props.onMouseDown(e);
    }
    return React.cloneElement(props.children, {onMouseUp: onMouseUp, onMouseDown: onMouseDown, object: props.object, selectedObjectsId: props.selectedObjectsId})
}

const mapStateToProps = ({layoutBuilder}) => ({
    mouseStartPosition: layoutBuilder.mouseStartPosition
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            updateEditMode,
            setMouseStartPosition,
            selectObjects,
            deselectAllObjects,
            setSelectedObjectsEditStartPosition,
            deselectAllObjectsExept
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Vector)