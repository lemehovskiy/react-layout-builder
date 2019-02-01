import React from 'react'
import {connect} from 'react-redux'
import Vector from './Vector';
import Handler from './Handler';

class SvgRender extends React.Component {

    constructor(props) {
        super(props);

        console.log(props.objects);
    }

    render() {
        return (
            <div className="container">
                <svg width='800' height='500'>
                    {this.props.objects.map(function(object){
                        return <Vector key={object.id} object={object}/>
                    })}
                </svg>
                <Handler/>
            </div>
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
