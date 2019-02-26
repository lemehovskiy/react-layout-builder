import React, {Component} from 'react';

const SelectTool = ({selectToolPosition, selectToolSize}) => {
    const divStyle = {
        position: 'absolute',
        top: selectToolPosition.y + 'px',
        left: selectToolPosition.x + 'px',
        width: selectToolSize.width + 'px',
        height: selectToolSize.height + 'px',
        border: "1px solid #6298F9",
        backgroundColor: "rgba(98, 152, 249, 0.3)"
    };

    return (
        <div style={divStyle}/>
    );
}

export default SelectTool;

