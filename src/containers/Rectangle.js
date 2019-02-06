import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import EditModeHelper from './EditModeHelper.js';

import {getObjectAttributes} from './actions/vector.js';

class Rectangle extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
                <g>
                    <rect {...getObjectAttributes(this.props.object)}
                        width={this.props.object.width}
                        height={this.props.object.height}
                        x={this.props.object.x}
                        y={this.props.object.y}
                        cursor="move"
                        onMouseDown={this.props.onMouseDown}
                        onMouseUp={this.props.onMouseUp}/>

                    {this.props.object.selected ? <EditModeHelper
                        object={this.props.object}/> : ''}
                </g>
        )
    }
}
//
// const mapStateToProps = ({svgRender}) => ({
//     mouseStartPosition: svgRender.mouseStartPosition
// })
//
// const mapDispatchToProps = dispatch =>
//     bindActionCreators({
//             updateHandlerObjectIndex,
//             updateEditMode,
//             setMouseStartPosition,
//             setObjectsSelectState,
//             deselectAllObjects,
//             setEditStartPositionOffset,
//             deselectAllObjectsExept
//         },
//         dispatch
//     )

export default connect(
    null,
    null
)(Rectangle)
