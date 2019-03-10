import React from 'react'
import Textarea from 'react-textarea-autosize';
import {getObjectAttributes} from '../../utils/vector.js';
import {getTextAttributes, getTextEditorAttributes} from '../../utils/text.js';

const TextEditor = ({object, textSize, setRef, onInputChange, onHeightChange}) => {
    return (
        <g>
            <foreignObject
                {...getObjectAttributes(object)}
                {...getTextAttributes(object, textSize)}
            >
                <div ref={setRef}>
                    <Textarea onHeightChange={onHeightChange} {...getTextEditorAttributes(object)} defaultValue={object.text} onChange={onInputChange}/>
                </div>
            </foreignObject>
        </g>
    )
}

export default TextEditor