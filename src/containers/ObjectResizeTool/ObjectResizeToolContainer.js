import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getObjectResizeValues} from '../../utils/resizeTool';

import {
    resizeObjects,
    setMouseStartPosition,
    updateEditMode,
    setObjectMode,
    saveEditObjectInitState
} from '../../actions/index'

import {
    setResizeDirection
} from '../../modules/resizeToolReducer'

import {getObjectAttributes} from '../../utils/vector.js';

class ObjectResizeToolContainer extends React.Component {
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
                ...updatedValues
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

    render() {
        let self = this;

        let object = this.props.object;

        const helperConfig =
            {
                dots: [
                    {
                        name: 'nw',
                        x: object.x,
                        y: object.y
                    },
                    {
                        name: 'n',
                        x: object.x + object.width / 2,
                        y: object.y
                    },
                    {
                        name: 'ne',
                        x: object.x + object.width,
                        y: object.y
                    },
                    {
                        name: 'w',
                        x: object.x,
                        y: object.y + object.height / 2
                    },
                    {
                        name: 'e',
                        x: object.x + object.width,
                        y: object.y + object.height / 2
                    },
                    {
                        name: 'sw',
                        x: object.x,
                        y: object.y + object.height
                    },
                    {
                        name: 's',
                        x: object.x + object.width / 2,
                        y: object.y + object.height
                    },
                    {
                        name: 'se',
                        x: object.x + object.width,
                        y: object.y + object.height
                    }
                ]
            }

        return (
            <g {...getObjectAttributes(object)}>
                <rect
                    width={object.width}
                    height={object.height}
                    x={object.x}
                    y={object.y}
                    fill="none" stroke="#00a8ff" strokeDasharray="3 3" pointerEvents="none"/>

                {helperConfig.dots.map(function (dot) {
                    return <circle key={dot.name} name={dot.name} cx={dot.x} cy={dot.y} fill="#34B7EF" r="5" style={{cursor: dot.name + '-resize'}} onMouseDown={self.onMouseDown.bind(self)}/>
                })}
            </g>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            resizeObjects,
            setMouseStartPosition,
            updateEditMode,
            setObjectMode,
            saveEditObjectInitState,
            setResizeDirection
        },
        dispatch
    )

export default connect(
    null,
    mapDispatchToProps
)(ObjectResizeToolContainer)
