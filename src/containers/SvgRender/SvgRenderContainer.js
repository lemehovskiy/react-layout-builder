import React from 'react'
import {connect} from 'react-redux'
import SvgRender from './SvgRender';
import styles from './index.module.scss';

const SvgRenderContainer = ({selectedObjectsId, objects}) => {
    return (
        <div className={styles.svgRender}>
            <SvgRender
                selectedObjectsId={selectedObjectsId}
                objects={objects}
            />
        </div>
    )
}

const mapStateToProps = ({svgRender, resizeTool, layoutBuilder}) => ({
    selectedObjectsId: svgRender.selectedObjectsId,
    objects: svgRender.objects,
})

export default connect(
    mapStateToProps,
    null
)(SvgRenderContainer)