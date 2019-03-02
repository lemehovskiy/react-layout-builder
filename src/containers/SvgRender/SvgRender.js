import React from 'react'
import Object from '../Figures/Object';
import Rectangle from '../Figures/Rectangle';
import Text from '../Figures/Text';
import DraggableObject from '../DraggableObject/DraggableObject';

const SvgRender = ({children, onMouseMove, onMouseUp, onMouseDown, objects, selectedObjectsId}) => {
    return (
        <svg id="svg-render" width='800' height='500'
             onMouseMove={onMouseMove}
             onMouseUp={onMouseUp}
             onMouseDown={onMouseDown}>

            <DraggableObject>
                {objects.map(function (object) {
                    let vectorType = null;
                    switch (object.type) {
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
                        <Object key={object.id} object={object} selectedObjectsId={selectedObjectsId}>
                            {vectorType}
                        </Object>
                    )
                })}
            </DraggableObject>
        </svg>
    )
}

export default SvgRender
