import React from 'react'
import Vector from '../Figures/Vector';
import Rectangle from '../Figures/Rectangle';
import Text from '../Figures/Text';

const SvgRender = ({children, onMouseMove, onMouseUp, onMouseDown, objects, selectedObjectsId}) => {
    return (
        <svg id="svg-render" width='800' height='500'
             onMouseMove={onMouseMove}
             onMouseUp={onMouseUp}
             onMouseDown={onMouseDown}>

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
                    <Vector key={object.id} object={object} selectedObjectsId={selectedObjectsId}>
                        {vectorType}
                    </Vector>
                )
            })}
        </svg>
    )
}

export default SvgRender
