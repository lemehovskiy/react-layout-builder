import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

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

class EditModeHelper extends React.Component {
    onRotateMouseDown(e) {
        this.props.setObjectMode(this.props.object.id, 'rotate');
        this.props.updateEditMode('rotate');
        this.props.setMouseStartPosition(e.clientX, e.clientY);
    }

    onDotMouseDown(e){
        this.props.setObjectMode(this.props.object.id, 'resize');
        this.props.updateEditMode('resize');
        this.props.saveEditObjectInitState(this.props.object.id);
        this.props.setMouseStartPosition(e.clientX, e.clientY);
        this.props.setResizeDirection(e.target.getAttribute('name'))
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

            const rotateIcon = {
                x: object.x + object.width / 2 - 6,
                y: object.y - 20
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
                    return <circle key={dot.name} name={dot.name} cx={dot.x} cy={dot.y} fill="#34B7EF" r="5" style={{cursor: dot.name + '-resize'}} onMouseDown={self.onDotMouseDown.bind(self)}/>
                })}

                <path cursor="pointer" onMouseDown={self.onRotateMouseDown.bind(self)} transform={'translate(' + rotateIcon.x + ' ' + rotateIcon.y +')'} stroke="rgb(0, 0, 0, 0)" strokeWidth="5" d="M5.1,0.2L4.4,0.8c-0.1,0.1-0.1,0.2,0,0.3l1.1,1.1C4.2,2.1,2.8,2.5,1.7,3.5c-2,1.8-2.1,4.9-0.3,6.8
                c1.8,2,4.8,2.1,6.8,0.3c0.9-0.8,1.4-1.9,1.5-3.1c0-0.1-0.1-0.3-0.2-0.3l-0.9,0c-0.1,0-0.2,0.1-0.2,0.2C8.3,8.2,7.9,9,7.2,9.6
                c-1.4,1.3-3.6,1.2-4.8-0.2C1.1,8,1.2,5.8,2.6,4.5c0.9-0.8,2-1.1,3.1-0.8L4.2,5c-0.1,0.1-0.1,0.2,0,0.3L4.8,6c0.1,0.1,0.2,0.1,0.3,0
                L8,3.4c0.1-0.1,0.1-0.2,0-0.3L5.4,0.2C5.3,0.1,5.2,0.1,5.1,0.2z"/>

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
)(EditModeHelper)
