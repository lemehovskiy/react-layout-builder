import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {
    updateEditMode,
    setMouseStartPosition,
    selectObjects,
    deselectAllObjects,
    setObjectEditStartPosition,
    deselectAllObjectsExept
} from '../../actions/index'

class Vector extends React.Component {
    onMouseUp = (e) => {
        const {mouseStartPosition, deselectAllObjectsExept} = this.props;
        let objectMoved = mouseStartPosition.x !== e.clientX || mouseStartPosition.y !== e.clientY;

        if (!e.shiftKey && !objectMoved) {
            deselectAllObjectsExept(this.props.object.id);
        }
    }

    onMouseDown = (e) => {
        const {selectObjects, selectedObjectsId, deselectAllObjects, setMouseStartPosition, setObjectEditStartPosition, updateEditMode} = this.props;
        const objectSelected = selectedObjectsId.includes(this.props.object.id);

        if (!e.shiftKey && !objectSelected) {
            deselectAllObjects();
        }
        if (!objectSelected) {
            selectObjects([this.props.object.id])
        }

        setMouseStartPosition(e.clientX, e.clientY)
        setObjectEditStartPosition(e.clientX, e.clientY);
        updateEditMode('drag')
    }

    render() {
        const {object, selectedObjectsId} = this.props;
        return React.cloneElement(this.props.children, {onMouseUp: this.onMouseUp, onMouseDown: this.onMouseDown, object: object, selectedObjectsId: selectedObjectsId})

    }
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
            setObjectEditStartPosition,
            deselectAllObjectsExept
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Vector)
