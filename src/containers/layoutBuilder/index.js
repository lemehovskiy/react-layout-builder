import React from 'react'
import SvgRenderContainer from '../SvgRender/SvgRenderContainer';
import ToolPanel from './../ToolPanel'
import NewDraggableObject from '../NewDraggableObject/NewDraggableObjectContainer';
import SelectToolContainer from './../SelectTool/SelectToolContainer';

class LayoutBuilder extends React.Component {
    render() {
        return (
            <div className="layout-builder">
                <NewDraggableObject>
                    <SelectToolContainer ref="SelectToolContainer">
                        <SvgRenderContainer ref="SvgRenderContainer"/>
                    </SelectToolContainer>
                    <ToolPanel/>
                </NewDraggableObject>
            </div>
        )
    }
}

export default LayoutBuilder;
