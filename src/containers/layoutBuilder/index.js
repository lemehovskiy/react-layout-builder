import React from 'react'
import SvgRender from '../SvgRender/SvgRenderContainer';
import ToolPanel from './../ToolPanel'
import NewDraggableObject from '../NewDraggableObject/NewDraggableObjectContainer';
import SelectTool from './../SelectTool/SelectToolContainer';

class LayoutBuilder extends React.Component {
    render() {
        return (
            <div className="layout-builder">
                <NewDraggableObject>
                    <SelectTool>
                        <SvgRender ref="SvgRenderContainer"/>
                    </SelectTool>
                    <ToolPanel/>
                </NewDraggableObject>
            </div>
        )
    }
}

export default LayoutBuilder;
