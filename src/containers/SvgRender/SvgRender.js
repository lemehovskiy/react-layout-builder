import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Vector from '../Vector';
import SelectTool from '../SelectTool';
import {getSelectToolSize, getSelectToolPosition, checkRectRectCollision} from '../actions/selectTool';
import {getObjectResizeValues} from '../actions/resizeTool';
import {getObjectRotateValue} from '../actions/rootateTool.js';
import Rectangle from '../Rectangle';
import Text from '../Text';
import styles from './index.module.scss';

import {
    updateEditMode,
    deselectAllObjects,
    moveObject,
    selectObjects,
    resizeObjects,
    resetObjectMode,
    rotateObject
} from '../../actions/index'

class SvgRender extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectToolActive: false,
            selectToolStartPoint: {
                x: null,
                y: null
            },
            mousePosition: {
                x: null,
                y: null
            },
            svgOffset: {
                x: null,
                y: null
            },
            selectToolSize: {
                x: null,
                y: null
            },
            selectToolPosition: {
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
            this.props.selectedObjects.forEach(function (object) {
                self.props.moveObject({
                    ids: [object.id],
                    x: e.clientX - object.editStartPositionOffset.x,
                    y: e.clientY - object.editStartPositionOffset.y
                });
            })
        }

        else if (this.props.editMode === 'resize') {
            this.props.selectedObjects.forEach(function (object) {
                // console.log(object);
                if (object.mode === 'resize') {
                    // console.log(object.height);
                    let updatedValues = getObjectResizeValues(
                        {x: e.clientX, y: e.clientY},
                        self.props.resizeToolDirection,
                        self.props.editObjectInitState,
                        self.props.mouseStartPosition,
                        {x: object.x, y: object.y, width: object.width, height: object.height}
                    );

                    // console.log(updatedValues);
                    self.props.resizeObjects({
                            ids: [object.id],
                            ...updatedValues
                        }
                    );
                }
            })
        }

        else if (this.props.editMode === 'rotate') {
            this.props.selectedObjects.forEach(function (object) {
                if (object.mode === 'rotate') {

                    let mouse = {x: e.clientX, y: e.clientY},
                        mouseStartPosition = self.props.mouseStartPosition;

                    self.props.rotateObject({
                            id: object.id,
                            rotate: getObjectRotateValue({mouse, mouseStartPosition, object})
                        }
                    );
                }
            })
        }


        if (this.props.editMode === 'selectTool') {
            this.updateSelectToolData({x: e.clientX, y: e.clientY});
        }
    }


    onMouseUp(e) {
        if (this.props.editMode === 'selectTool') {
            this.handleSelectTool();
        }
        else if (this.props.editMode === 'resize') {
            this.props.resetObjectMode();
        }
        else if (this.props.editMode === 'rotate') {
            this.props.resetObjectMode();
        }


        this.props.updateEditMode(null);
    }

    onMouseDown(e) {
        if (e.target === e.currentTarget) {
            this.setSelectStartPosition({x: e.clientX, y: e.clientY});
            this.updateSelectToolData({x: e.clientX, y: e.clientY});
            this.props.updateEditMode('selectTool');
        }
    }

    setSelectStartPosition(mousePosition) {
        this.setState({
            selectToolStartPoint: {
                x: mousePosition.x - this.state.svgOffset.x,
                y: mousePosition.y - this.state.svgOffset.y
            }
        })
    }

    handleSelectTool() {
        let self = this;

        this.resetSelectToolData();

        let selectedObjectIds = [];

        this.props.objects.forEach(function (object) {
            if (checkRectRectCollision({
                        x: object.x,
                        y: object.y,
                        width: object.width,
                        height: object.height
                    },
                    {
                        x: self.state.selectToolPosition.x,
                        y: self.state.selectToolPosition.y,
                        width: self.state.selectToolSize.width,
                        height: self.state.selectToolSize.height
                    })) {
                selectedObjectIds.push(object.id);
            }
        })

        this.props.deselectAllObjects();

        if (selectedObjectIds.length) {
            console.log(111);
            this.props.selectObjects(selectedObjectIds)
        }
    }

    resetSelectToolData() {
        this.setState({
            selectToolStartPoint: {x: null, y: null},
            selectToolSize: {x: null, y: null}
        });
    }

    updateSelectToolData(mousePosition) {
        if (this.state.selectToolStartPoint.x === null) return;

        const selectToolSize = getSelectToolSize(
            this.state.selectToolStartPoint,
            mousePosition,
            this.state.svgOffset
        );

        this.setState({
            selectToolSize: selectToolSize
        })
        const selectToolPosition = getSelectToolPosition(
            this.state.selectToolStartPoint,
            mousePosition,
            this.state.svgOffset,
            selectToolSize
        );
        this.setState({
            selectToolPosition: selectToolPosition
        })
    }

    render() {
        let self = this;

        return (
            <div className={styles.svgRender}>
                <svg ref="svgRender" width='800' height='500'
                     onMouseMove={this.onMouseMove.bind(this)} onMouseUp={this.onMouseUp.bind(this)}
                     onMouseDown={this.onMouseDown.bind(this)}>
                    {this.props.objects.map(function (object) {
                        let vectorType = null;
                        switch (object.type) {
                            case 'rectangle': {
                                vectorType = <Rectangle/>;
                                break;
                            }
                            case 'text': {
                                vectorType = <Text/>;
                                break;
                            }
                        }
                        return (
                            <Vector key={object.id} object={object} selectedObjectsId={self.props.selectedObjectsId}>
                                {vectorType}
                            </Vector>
                        )
                    })}

                    {this.props.editMode === 'selectTool' ? <SelectTool
                        selectToolPosition={this.state.selectToolPosition}
                        selectToolSize={this.state.selectToolSize}
                    /> : ''}
                </svg>
            </div>
        )
    }
}

const mapStateToProps = ({svgRender, resizeTool, layoutBuilder}) => ({
    selectedObjects: svgRender.objects.filter(object => svgRender.selectedObjectsId.includes(object.id)),
    selectedObjectsId: svgRender.selectedObjectsId,
    objects: svgRender.objects,
    editMode: svgRender.editMode,
    mouseStartPosition: layoutBuilder.mouseStartPosition,
    editObjectInitState: svgRender.editObjectInitState,
    resizeToolDirection: resizeTool.resizeDirection
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            updateEditMode,
            deselectAllObjects,
            moveObject,
            selectObjects,
            resizeObjects,
            resetObjectMode,
            rotateObject
        },
        dispatch
    )


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SvgRender)
