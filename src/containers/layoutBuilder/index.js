import React from 'react'
import SvgRenderContainer from '../SvgRender/SvgRenderContainer';
import ToolPanel from './../ToolPanel'
import NewDraggableObject from '../NewDraggableObject/NewDraggableObjectContainer';

class LayoutBuilder extends React.Component {
    render() {
        return (
            <div className="layout-builder" id="layout-builder">
                <NewDraggableObject>
                    <div className="main-col">
                        <SvgRenderContainer ref="SvgRenderContainer"/>
                    </div>
                    <div className="tool-panel-col">
                        <ToolPanel/>
                    </div>
                </NewDraggableObject>
            </div>
        )
    }
}

export default LayoutBuilder;
