import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import {
    updateHandlerObjectIndex
} from '../modules/svgRender'


class Handler extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {boundingBox} = this.props;

        let handlerStyle = {
            // width: boundingBox.width + 10,
            // height: boundingBox.height + 10,
            // left: boundingBox.left - 5,
            // top: boundingBox.top - 5,
            // transform: `rotate(${boundingBox.rotate}deg)`
        };

        return (
            <div style={handlerStyle}/>
        )
    }
}

const mapStateToProps = ({svgRender}) => ({
    objects: svgRender.objects
})

export default connect(
    null,
    null,
)(Handler)
