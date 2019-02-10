import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import EditModeHelper from './EditModeHelper.js';

import {getObjectAttributes} from './actions/vector.js';
import {getTextAttributes, getTextWrapAttributes} from './actions/text.js';

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
                    {...getTextAttributes(this.props.object, this.state)}
                >
                    <div {...getTextWrapAttributes(this.props.object)} ref={ (divElement) => this.divElement = divElement}>
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
