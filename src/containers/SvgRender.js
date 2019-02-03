import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Vector from './Vector';
import Handler from './Handler';

import {
    updateMouseCoordinates,
    updateEditMode,
    deselectAllObjects
} from '../../src/modules/svgRender'


class SvgRender extends React.Component {

    constructor(props) {
        super(props);
    }

    onMouseMove(e){
        this.props.updateMouseCoordinates(e.clientX, e.clientY)
    }

    onMouseUp(){
        this.props.updateEditMode(null);
    }

    onClick(event){
        if(event.target === event.currentTarget) {
            this.props.deselectAllObjects();
        }
    }

    render() {

        return (
            <div className="container">
                <svg width='800' height='500' onClick={this.onClick.bind(this)} onMouseMove={this.onMouseMove.bind(this)} onMouseUp={this.onMouseUp.bind(this)}>
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

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            updateMouseCoordinates,
            updateEditMode,
            deselectAllObjects
        },
        dispatch
    )



export default connect(
    mapStateToProps ,
    mapDispatchToProps
)(SvgRender)
