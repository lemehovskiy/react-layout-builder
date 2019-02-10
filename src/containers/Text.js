import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import EditModeHelper from './EditModeHelper.js';

import {getObjectAttributes} from './actions/vector.js';

function breakLine(text) {
    console.log(text);
    var br = React.createElement('br');
    var regex = /(<br \/>)/g;
    return text.split(regex).map(function(line, index) {
        return line.match(regex) ? <br key={"key_" + index} /> : line;
    });
}

class Text extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: 0,
            width: 0
        }
    }

    onResize(){
        const height = this.divElement.clientHeight;
        const width = this.divElement.clientWidth;

        this.setState({ height, width });
    }

    componentDidUpdate(prevProps){
        if (prevProps.object.width !== this.props.object.width || prevProps.object.height !== this.props.object.height) {
            this.onResize();
        }
    }

    componentDidMount(){
        this.onResize();
    }


    render() {
        return (
            <g>
                <foreignObject
                    {...getObjectAttributes(this.props.object)}
                    width={this.props.object.width}
                    height={this.state.height}
                    overflow="visible"
                    x={this.props.object.x}
                    y={this.props.object.y + this.props.object.height / 2 - this.state.height / 2}
                >
                    <div style={{ textAlign: 'center' }} ref={ (divElement) => this.divElement = divElement}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'inline-block' }}>
                            {this.props.object.text.split("\n").map((i,key) => {
                                return <div key={key}>{i}</div>;
                            })}
                        </div>
                    </div>
                </foreignObject>
            </g>
        )
    }
}


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
)(Text)
