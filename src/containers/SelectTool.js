import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getSelectToolSize, getSelectToolPosition} from './actions/selectTool';

class SelectTool extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let selectToolSize = getSelectToolSize(this.props.selectToolStartPoint, this.props.mousePosition, this.props.svgOffset);

        let selectToolPosition = getSelectToolPosition(this.props.selectToolStartPoint, this.props.mousePosition, this.props.svgOffset, selectToolSize);
        
        
        return (
            <g>
                {this.props.selectToolActive ? <rect
                    strokeWidth="1"
                    stroke="#6298F9"
                    fill="rgba(98, 152, 249, 0.3)"
                    opacity="0.3"
                    x={selectToolPosition.x}
                    y={selectToolPosition.y}
                    width={selectToolSize.width}
                    height={selectToolSize.height}
                /> : ''}
            </g>
        );
    }
}


const mapStateToProps = ({svgRender}) => ({
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({

        },
        dispatch
    )


export default connect(
    null,
    null
)(SelectTool)

