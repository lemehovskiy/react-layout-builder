import React from 'react'
import ObjectRotateTool from '../ObjectRotateTool/ObjectRotateToolContainer.js';
import ObjectResizeTool from '../ObjectResizeTool/ObjectResizeToolContainer.js';
import Text from './TextContainer';
import TextEditor from './../TextEditor/TextEditorContainer';
import {getObjectAttributes} from '../../utils/vector.js';

const Rectangle = ({object, onMouseDown, onMouseUp, onDoubleClick, selectedObjectsId, mode}) => {
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
                  onDoubleClick={onDoubleClick}
            />

            {object.text && mode !== 'editText' ? <Text object={object}/> : null}
            {mode === 'editText' ? <TextEditor object={object}/> : null}

            {selectedObjectsId.includes(object.id) ? <g><ObjectResizeTool object={object}/> <ObjectRotateTool object={object}/></g> : null}

        </g>
    )
}

export default Rectangle