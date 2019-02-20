import React from 'react'
import SvgRender from '../SvgRender/SvgRender';
import ToolPanel from './../ToolPanel'
import NewFiguresDragHelper from './../ToolPanel/Figures/NewFigureDragHelper';

class LayoutBuilder extends React.Component {
    render() {
        return (
            <div>
                <NewFiguresDragHelper>
                    <SvgRender ref="SvgRender"/>
                    <ToolPanel/>
                </NewFiguresDragHelper>
            </div>
        )
    }
}

export default LayoutBuilder;
