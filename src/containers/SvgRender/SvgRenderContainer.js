import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getObjectResizeValues} from '../../utils/resizeTool';
import {getObjectRotateValue} from '../../utils/rootateTool.js';
import SvgRender from './SvgRender';

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

class SvgRenderContainer extends React.Component {
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

        if (this.props.editMode === 'resize') {
            this.props.selectedObjects.forEach(function (object) {
                if (object.mode === 'resize') {
                    let updatedValues = getObjectResizeValues(
                        {x: e.clientX, y: e.clientY},
                        self.props.resizeToolDirection,
                        self.props.editObjectInitState,
                        self.props.mouseStartPosition,
                        {x: object.x, y: object.y, width: object.width, height: object.height}
                    );

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
    }

    onMouseUp(e) {
        if (this.props.editMode === 'resize') {
            this.props.resetObjectMode();
        }
        else if (this.props.editMode === 'rotate') {
            this.props.resetObjectMode();
        }

        this.props.updateEditMode(null);
    }

    render() {
        let self = this;
        return (
            <div className={styles.svgRender} ref="svgRender">
                <SvgRender
                    onMouseMove={this.onMouseMove.bind(this)}
                    onMouseUp={this.onMouseUp.bind(this)}
                    selectedObjectsId={self.props.selectedObjectsId}
                    objects={self.props.objects}
                />
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
)(SvgRenderContainer)
