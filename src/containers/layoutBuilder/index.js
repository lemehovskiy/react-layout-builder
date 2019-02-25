import React from 'react'
import SvgRenderContainer from '../SvgRender/SvgRenderContainer';
import ToolPanel from './../ToolPanel'
import NewFiguresDragHelper from './../ToolPanel/Figures/NewFigureDragHelper';

class LayoutBuilder extends React.Component {
    render() {
        return (
            <div>
                <NewFiguresDragHelper>
                    <SvgRenderContainer ref="SvgRender"/>
                    <ToolPanel/>
                </NewFiguresDragHelper>
            </div>
        )
    }
}

export default LayoutBuilder;
