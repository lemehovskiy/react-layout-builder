import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getObjectRotateValue} from '../../utils/rootateTool.js';
import ObjectRotateTool from './ObjectRotateTool';

import {
    rotateObject,
} from '../../actions/index'


class ObjectRotateToolContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isRotate: false,
            mouseStartPosition: {
                x: null,
                y: null
            }
        }
    }

    componentDidUpdate() {
        if (this.state.isRotate) {
            document.addEventListener('mousemove', this.onMouseMove)
            document.addEventListener('mouseup', this.onMouseUp)
        }
        else {
            document.removeEventListener('mousemove', this.onMouseMove)
            document.removeEventListener('mouseup', this.onMouseUp)
        }
    }

    onMouseMove = (e) => {
        const {object, rotateObject} = this.props;
        const {mouseStartPosition} = this.state;
        const mousePosition = {x: e.clientX, y: e.clientY};

        rotateObject({
                id: object.id,
                rotate: getObjectRotateValue({mousePosition, mouseStartPosition, object})
            }
        );
    }

    onMouseUp = () => {
        this.setState({
            isRotate: false,
            mouseStartPosition: {
                x: null,
                y: null
            }
        })
    }

    onMouseDown = (e) => {
        this.setState({
            isRotate: true,
            mouseStartPosition: {
                x: e.clientX,
                y: e.clientY
            }
        })
    }

    render() {
        const {object} = this.props;
        return <ObjectRotateTool object={object} onMouseDown={this.onMouseDown}/>
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            rotateObject
        },
        dispatch
    )

export default connect(
    null,
    mapDispatchToProps
)(ObjectRotateToolContainer)