import React from 'react'
import TextEditor from "./TextEditor";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {updateObjectText} from "../../actions/index";

class TextEditorContainer extends React.Component {
    constructor(props) {
        super(props);
        this.divTextWrapRef = React.createRef();

        this.state = {
            height: 0,
            width: 0
        }
    }

    onResize() {
        const {height, width} = this.divTextWrapRef.current.getBoundingClientRect();
        this.setState({height, width});
    }

    onHeightChange = () => {
        this.onResize();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.object.width !== this.props.object.width || prevProps.object.height !== this.props.object.height) {
            this.onResize();
        }
    }

    componentDidMount() {
        this.onResize();
    }

    onInputChange = (e) => {
        this.props.updateObjectText({
            id: this.props.object.id,
            text: e.target.value
        })
        this.onResize()
    }

    render() {
        const {object} = this.props;

        return (
            <TextEditor object={object} textSize={this.state} setRef={this.divTextWrapRef}
                        onInputChange={this.onInputChange} onHeightChange={this.onHeightChange}/>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            updateObjectText
        },
        dispatch
    )

export default connect(
    null,
    mapDispatchToProps
)(TextEditorContainer)
