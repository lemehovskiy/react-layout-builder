import React from 'react'
import SvgRender from '../SvgRender/SvgRender';
import ToolPanel from './../ToolPanel'
import NewFiguresDragHelper from './../ToolPanel/Figures/NewFigureDragHelper';


class LayoutBuilder extends React.Component {
    constructor(props) {
        super(props);


    }

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
