import React from 'react'
import {connect} from 'react-redux'
import Vector from './Vector';

class SvgRender extends React.Component {

    constructor(props) {
        super(props);

        console.log(props.objects);
    }

    render() {

        return (
            <svg width='800' height='500'>
                <Vector/>
            </svg>
        )
    }
}

const mapStateToProps = ({svgRender}) => ({
    objects: svgRender.objects
})


export default connect(
    mapStateToProps,
    null
)(SvgRender)
