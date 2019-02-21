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
    onMouseUp(e) {
        let objectMoved = this.props.mouseStartPosition.x !== e.clientX || this.props.mouseStartPosition.y !== e.clientY;

        if (!e.shiftKey && !objectMoved) {
            this.props.deselectAllObjectsExept(this.props.object.id);
        }
    }


    onMouseDown(e) {
        const objectSelected = this.props.selectedObjectsId.includes(this.props.object.id);

        if (!e.shiftKey && !objectSelected) {
            this.props.deselectAllObjects();
        }
        if (!objectSelected) {
            this.props.selectObjects([this.props.object.id])
        }

        this.props.setMouseStartPosition(e.clientX, e.clientY)
        this.props.setObjectEditStartPosition(e.clientX, e.clientY);
        this.props.updateEditMode('drag')
    }

    render() {
        return React.cloneElement(this.props.children, {onMouseUp: this.onMouseUp.bind(this), onMouseDown: this.onMouseDown.bind(this), object: this.props.object, selectedObjectsId: this.props.selectedObjectsId})

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
