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

class Vector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 'default'
        }
    }

    resetMode() {
        this.setState({
            mode: 'default'
        })
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    onDoubleClick = (e) => {
        this.setState({
            mode: 'editText'
        })
    }

    onMouseUp = (e) => {
        const {object, mouseStartPosition, deselectAllObjectsExept} = this.props;
        let objectMoved = mouseStartPosition.x !== e.clientX || mouseStartPosition.y !== e.clientY;

        if (!e.shiftKey && !objectMoved) {
            console.log('Vector onMouseUp')
            deselectAllObjectsExept(object.id);
        }
    }

    onMouseDown = (e) => {
        console.log('Vector onMouseDown')

        const {object, selectObjects, selectedObjectsId, deselectAllObjects, setSelectedObjectsEditStartPosition} = this.props;
        const objectSelected = selectedObjectsId.includes(object.id);

        this.setState({
            mode: 'default'
        })

        if (!e.shiftKey && !objectSelected) {
            deselectAllObjects();
        }
        if (!objectSelected) {
            selectObjects([object.id])
        }

        //TODO move setSelectedObjectsEditStartPosition to DraggableObject
        setSelectedObjectsEditStartPosition(e.clientX, e.clientY);
        this.props.onMouseDown(e);
    }

    render() {
        const {children, object, selectedObjectsId} = this.props;
        const {mode} = this.state;
        return React.cloneElement(children, {
                onMouseUp: this.onMouseUp,
                onMouseDown: this.onMouseDown,
                onDoubleClick: this.onDoubleClick,
                object: object,
                selectedObjectsId: selectedObjectsId,
                mode: mode
            }
        )
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
            setSelectedObjectsEditStartPosition,
            deselectAllObjectsExept
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Vector)