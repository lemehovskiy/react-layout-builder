import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Vector from './Vector';
import Handler from './Handler';

import {
    updateMouseCoordinates,
    updateEditMode,
    deselectAllObjects,
    moveObject
} from '../../src/modules/svgRender'


class SvgRender extends React.Component {

    constructor(props) {
        super(props);


    }

    startDrag(){
        let selectedObjects = this.props.objects.map(function(item){
            if (item.selected) return item;
        })

        this.setState({
            selectedObjects: selectedObjects
        })
    }

    onMouseMove(e){
        let self = this;

        if (this.props.editMode === 'drag') {

            this.props.objects.forEach(function(object){
                if (object.selected) {
                    console.log(object.id);
                    self.props.moveObject(object.id, e.clientX - object.editStartPositionOffset.x, e.clientY - object.editStartPositionOffset.y);
                }
            })

            this.props.updateMouseCoordinates(e.clientX, e.clientY)
        }
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
    objects: svgRender.objects,
    editMode: svgRender.editMode,
    editStartPoint: svgRender.editStartPoint,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            updateMouseCoordinates,
            updateEditMode,
            deselectAllObjects,
            moveObject
        },
        dispatch
    )



export default connect(
    mapStateToProps ,
    mapDispatchToProps
)(SvgRender)
