import React from 'react'
import EditModeHelper from '../SvgRender/EditModeHelper.js';
import Text from './TextContainer';
import {getObjectAttributes} from '../../utils/vector.js';

const Rectangle = ({object, onMouseDown, onMouseUp, selectedObjectsId}) => {
    return (
        <g>
            <rect {...getObjectAttributes(object)}
                  width={object.width}
                  height={object.height}
                  x={object.x}
                  y={object.y}
                  pointerEvents="visible"
                  cursor="move"
                  fill={object.fill}
                  strokeWidth={object.strokeWidth}
                  stroke={object.stroke}
                  onMouseDown={onMouseDown}
                  onMouseUp={onMouseUp}
            />

            {object.text ? <Text object={object}/> : ''}

            {selectedObjectsId.includes(object.id) ? <EditModeHelper
                object={object}/> : ''}

        </g>
    )
}

export default Rectangle