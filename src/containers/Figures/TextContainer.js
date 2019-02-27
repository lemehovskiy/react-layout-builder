import React from 'react'
import Text from "./Text";

class TextContainer extends React.Component {
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

    componentDidUpdate(prevProps) {
        if (prevProps.object.width !== this.props.object.width || prevProps.object.height !== this.props.object.height) {
            this.onResize();
        }
    }

    componentDidMount() {
        this.onResize();
    }

    render() {
        const {object} = this.props;

        return (
            <Text object={object} textSize={this.state} setRef={this.divTextWrapRef}/>
        )
    }
}

export default TextContainer