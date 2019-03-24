import React from 'react'
import {getResizeObjectDotsConfig} from "../../utils/resizeTool";
import {getObjectAttributes} from "../../utils/vector";

const ObjectResizeTool = ({object, onMouseDown, resizeDirection}) => {
    const dotsConfig = getResizeObjectDotsConfig(object, resizeDirection);

    return (
        <g {...getObjectAttributes(object)}>

            {resizeDirection ? null : <rect
                width={object.width}
                height={object.height}
                x={object.x}
                y={object.y}
                fill="none" stroke="#00a8ff" strokeDasharray="3 3" pointerEvents="none"/>}

            {dotsConfig.map(function (dot) {
                return <circle key={dot.name} name={dot.name} cx={dot.x} cy={dot.y} fill="#34B7EF" r="5"
                               style={{cursor: dot.name + '-resize'}} onMouseDown={onMouseDown}/>
            })}
        </g>
    )
}

export default ObjectResizeTool;