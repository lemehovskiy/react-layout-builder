import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Vector from './Vector';
import Handler from './Handler';
import SelectTool from './SelectTool';


import {
    updateMouseCoordinates,
    updateEditMode,
    deselectAllObjects,
    moveObject
} from '../../src/modules/svgRender'

class SvgRender extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mousePosition: {
                x: null,
                y: null
            },
            svgOffset: {
                x: null,
                y: null
            }
        }
    }

    componentDidMount() {
        const getBoundingClientRect = this.refs.svgRender.getBoundingClientRect();

        this.setState({
            svgOffset: {
                x: getBoundingClientRect.x,
                y: getBoundingClientRect.y
            }
        })
    }

    onMouseMove(e) {
        let self = this;

        if (this.props.editMode === 'drag') {
            this.props.objects.forEach(function (object) {
                if (object.selected) {
                    self.props.moveObject(object.id, e.clientX - object.editStartPositionOffset.x, e.clientY - object.editStartPositionOffset.y);
                }
            })
        }

        if (this.state.selectToolActive) {

            console.log('asdfasdf');
            this.setState({
                mousePosition: {
                    x: e.clientX,
                    y: e.clientY
                }
            })
        }
    }

    onMouseUp() {
        this.props.updateEditMode(null);
        this.setState({
            selectToolActive: false,
            selectToolSize: {
                width: null,
                height: null
            }
        })
    }

    onMouseDown(e) {
        if (e.target === e.currentTarget) {
            this.setState({
                selectToolActive: true,
                selectToolStartPoint: {
                    x: e.clientX - this.state.svgOffset.x,
                    y: e.clientY - this.state.svgOffset.y
                },
                mousePosition: {
                    x: e.clientX,
                    y: e.clientY
                }
            })
        }
    }

    onClick(e) {
        if (e.target === e.currentTarget) {
            this.props.deselectAllObjects();
        }
    }

    render() {
        return (
            <div className="container">
                <svg ref="svgRender" width='800' height='500' onClick={this.onClick.bind(this)}
                     onMouseMove={this.onMouseMove.bind(this)} onMouseUp={this.onMouseUp.bind(this)}
                     onMouseDown={this.onMouseDown.bind(this)}>
                    {this.props.objects.map(function (object) {
                        return <Vector key={object.id} object={object}/>
                    })}


                    {this.state.selectToolActive ? <SelectTool selectToolActive={this.state.selectToolActive}
                                                               mousePosition={this.state.mousePosition}
                                                               svgOffset={this.state.svgOffset}
                                                               selectToolStartPoint={this.state.selectToolStartPoint}/> : ''}
                </svg>
                <Handler/>
            </div>
        )
    }
}

const mapStateToProps = ({svgRender}) => ({
    objects: svgRender.objects,
    editMode: svgRender.editMode,
    editStartPoint: svgRender.editStartPoint
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
    mapStateToProps,
    mapDispatchToProps
)(SvgRender)
