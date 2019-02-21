import React from 'react'
import EditModeHelper from './EditModeHelper.js';
import Text from './Text';

import {getObjectAttributes} from '../utils/vector.js';

class Rectangle extends React.Component {
    render() {
        return (
            <g>
                <rect {...getObjectAttributes(this.props.object)}
                      width={this.props.object.width}
                      height={this.props.object.height}
                      x={this.props.object.x}
                      y={this.props.object.y}
                      pointerEvents="visible"
                      cursor="move"
                      fill={this.props.object.fill}
                      strokeWidth={this.props.object.strokeWidth}
                      stroke={this.props.object.stroke}
                      onMouseDown={this.props.onMouseDown}
                      onMouseUp={this.props.onMouseUp}
                />

                {this.props.object.text ? <Text object={this.props.object}/> : ''}


                {this.props.selectedObjectsId.includes(this.props.object.id) ? <EditModeHelper
                    object={this.props.object}/> : ''}

            </g>
        )
    }
}

export default Rectangle
