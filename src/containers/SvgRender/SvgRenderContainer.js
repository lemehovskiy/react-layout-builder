import React from 'react'
import {connect} from 'react-redux'
import SvgRender from './SvgRender';

const SvgRenderContainer = ({selectedObjectsId, objects}) => {
    return <SvgRender
                selectedObjectsId={selectedObjectsId}
                objects={objects}
            />
}

const mapStateToProps = ({svgRender, resizeTool, layoutBuilder}) => ({
    selectedObjectsId: svgRender.selectedObjectsId,
    objects: svgRender.objects,
})

export default connect(
    mapStateToProps,
    null
)(SvgRenderContainer)