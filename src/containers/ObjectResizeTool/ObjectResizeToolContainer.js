import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getObjectResizeValues} from '../../utils/resizeTool';
import ObjectResizeTool from './ObjectResizeTool';

import {
    resizeObjects
} from '../../actions/index'

class ObjectResizeToolContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isResizing: false,
            mouseStartPosition: {
                x: null,
                y: null
            },
            resizeDirection: null,
            objectInitState: null
        }
    }

    componentDidUpdate() {
        if (this.state.isResizing) {
            document.addEventListener('mousemove', this.onMouseMove)
            document.addEventListener('mouseup', this.onMouseUp)
        }
        else {
            document.removeEventListener('mousemove', this.onMouseMove)
            document.removeEventListener('mouseup', this.onMouseUp)
        }
    }

    onMouseMove = (e) => {
        const {object, resizeObjects} = this.props;
        const {mouseStartPosition, resizeDirection, objectInitState} = this.state;
        const mousePosition = {x: e.clientX, y: e.clientY};
        const updatedValues = getObjectResizeValues(
            mousePosition,
            resizeDirection,
            objectInitState,
            mouseStartPosition,
            {x: object.x, y: object.y, width: object.width, height: object.height}
        );
        resizeObjects({
                ids: [object.id],
                payload: {...updatedValues}
            }
        );
    }

    onMouseUp = () =>{
        this.setState({
            isResizing: false,
            mouseStartPosition: {
                x: null,
                y: null
            }
        })
    }

    onMouseDown = (e) => {
        const {object} = this.props;

        this.setState({
            isResizing: true,
            objectInitState: {...object},
            resizeDirection: e.target.getAttribute('name'),
            mouseStartPosition: {
                x: e.clientX,
                y: e.clientY
            }
        })
    }

    render = () => <ObjectResizeTool object={this.props.object} onMouseDown={this.onMouseDown}/>
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            resizeObjects
        },
        dispatch
    )

export default connect(
    null,
    mapDispatchToProps
)(ObjectResizeToolContainer)
