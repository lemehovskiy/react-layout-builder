import React from 'react'
import Object from '../Figures/Object';
import Rectangle from '../Figures/Rectangle';
import Text from '../Figures/Text';
import DraggableObject from '../DraggableObject/DraggableObject';

const SvgRender = ({onMouseMove, onMouseUp, onMouseDown, objectsById, objectsByHash, selectedObjectsId}) => {
    return (
        <svg id="svg-render" width='800' height='500'
             onMouseMove={onMouseMove}
             onMouseUp={onMouseUp}
             onMouseDown={onMouseDown}>

            <DraggableObject>
                {objectsById.map((item, index) => {
                    let vectorType = null;
                    switch (objectsByHash[item].type) {
                        case 'rectangle': {
                            vectorType = <Rectangle/>;
                            break;
                        }
                        case 'text': {
                            vectorType = <Text/>;
                            break;
                        }
                        default: {
                            break;
                        }
                    }
                    return (
                        <Object key={index} object={objectsByHash[item]} selectedObjectsId={selectedObjectsId}>
                            {vectorType}
                        </Object>
                    )
                })}
            </DraggableObject>
        </svg>
    )
}

export default SvgRender
