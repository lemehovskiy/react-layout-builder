import React from 'react'
import {connect} from 'react-redux'
import SvgRender from './SvgRender';

const SvgRenderContainer = ({selectedObjectsId, objectsById, objectsByHash}) => {
    return <SvgRender
                selectedObjectsId={selectedObjectsId}
                objectsById={objectsById}
                objectsByHash={objectsByHash}
            />
}

const mapStateToProps = ({svgRender, resizeTool, layoutBuilder}) => ({
    selectedObjectsId: svgRender.selectedObjectsId,
    objectsById: svgRender.objectsById,
    objectsByHash: svgRender.objectsByHash
})

export default connect(
    mapStateToProps,
    null
)(SvgRenderContainer)