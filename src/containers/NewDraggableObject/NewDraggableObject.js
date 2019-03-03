import React from 'react'
import toolPanelVectorStyle from '../ToolPanel/Figures/Figures.module.scss';

const NewDraggableObject = ({objectPosition}) => {

    const dragItemPosition = {
        left: objectPosition.x,
        top: objectPosition.y
    };

    return (
        <div className={`${toolPanelVectorStyle['new-figure']} ${toolPanelVectorStyle['rectangle']}`}
             style={dragItemPosition}/>

    );
}


export default NewDraggableObject
