import React from 'react'
import {getObjectAttributes} from '../../utils/vector.js';

const ObjectRotateTool = ({object, onMouseDown}) => {
    const rotateIcon = {
        x: object.x + object.width / 2 - 6,
        y: object.y - 20
    }

    return (
        <g {...getObjectAttributes(object)}>
            <path cursor="pointer" onMouseDown={onMouseDown}
                  transform={'translate(' + rotateIcon.x + ' ' + rotateIcon.y + ')'} stroke="rgb(0, 0, 0, 0)"
                  strokeWidth="5" d="M5.1,0.2L4.4,0.8c-0.1,0.1-0.1,0.2,0,0.3l1.1,1.1C4.2,2.1,2.8,2.5,1.7,3.5c-2,1.8-2.1,4.9-0.3,6.8
                c1.8,2,4.8,2.1,6.8,0.3c0.9-0.8,1.4-1.9,1.5-3.1c0-0.1-0.1-0.3-0.2-0.3l-0.9,0c-0.1,0-0.2,0.1-0.2,0.2C8.3,8.2,7.9,9,7.2,9.6
                c-1.4,1.3-3.6,1.2-4.8-0.2C1.1,8,1.2,5.8,2.6,4.5c0.9-0.8,2-1.1,3.1-0.8L4.2,5c-0.1,0.1-0.1,0.2,0,0.3L4.8,6c0.1,0.1,0.2,0.1,0.3,0
                L8,3.4c0.1-0.1,0.1-0.2,0-0.3L5.4,0.2C5.3,0.1,5.2,0.1,5.1,0.2z"/>
        </g>
    )
}

export default ObjectRotateTool
