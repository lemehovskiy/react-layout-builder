import React from 'react'
import SvgRenderContainer from '../SvgRender/SvgRenderContainer';
import ToolPanel from './../ToolPanel'
import NewFiguresDragHelper from './../ToolPanel/Figures/NewFigureDragHelper';
import SelectToolContainer from './../SelectTool/SelectToolContainer';

class LayoutBuilder extends React.Component {
    render() {
        return (
            <div className="layout-builder">
                <NewFiguresDragHelper>
                    <SelectToolContainer ref="SelectToolContainer">
                        <SvgRenderContainer ref="SvgRenderContainer"/>
                    </SelectToolContainer>
                    <ToolPanel/>
                </NewFiguresDragHelper>
            </div>
        )
    }
}

export default LayoutBuilder;
