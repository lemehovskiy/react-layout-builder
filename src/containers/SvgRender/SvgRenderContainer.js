import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
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

    render() {
        let self = this;
        return (
            <div className={styles.svgRender} ref="svgRender">
                <SvgRender
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
