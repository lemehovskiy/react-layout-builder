import React from 'react'
import {getObjectAttributes} from '../../utils/vector.js';
import {getTextAttributes, getTextWrapAttributes} from '../../utils/text.js';

const Text = ({object, textSize, setRef}) => {
    return (
        <g>
            <foreignObject
                pointerEvents="none"
                {...getObjectAttributes(object)}
                {...getTextAttributes(object, textSize)}
            >
                <div {...getTextWrapAttributes(object)} ref={setRef}>
                    <div xmlns="http://www.w3.org/1999/xhtml" style={{display: 'inline-block'}}>
                        {object.text.split("\n").map((i, key) => {
                            return <div key={key}>{i}</div>;
                        })}
                    </div>
                </div>
            </foreignObject>
        </g>
    )
}

export default Text