import React, {Component} from 'react';

class SelectTool extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <g>
               <rect
                    strokeWidth="1"
                    stroke="#6298F9"
                    fill="rgba(98, 152, 249, 0.3)"
                    opacity="0.3"
                    x={this.props.selectToolPosition.x}
                    y={this.props.selectToolPosition.y}
                    width={this.props.selectToolSize.width}
                    height={this.props.selectToolSize.height}
                /> : ''}
            </g>
        );
    }
}

export default SelectTool;

