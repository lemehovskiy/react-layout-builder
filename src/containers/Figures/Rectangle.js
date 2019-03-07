import React from 'react'
import ObjectRotateTool from '../ObjectRotateTool/ObjectRotateToolContainer.js';
import ObjectResizeTool from '../ObjectResizeTool/ObjectResizeToolContainer.js';
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

            {object.text ? <Text object={object}/> : null}

            {selectedObjectsId.includes(object.id) ? <g><ObjectResizeTool object={object}/> <ObjectRotateTool object={object}/></g> : null}

        </g>
    )
}

export default Rectangle