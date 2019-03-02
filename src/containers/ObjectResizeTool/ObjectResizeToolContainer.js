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

class ObjectResizeToolContainer extends React.Component {

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
