import React from 'react'
import {push} from 'connected-react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import SvgRender from '../SvgRender/SvgRender';
import ToolPanel from './../ToolPanel'

import styles from './index.module.scss';
import toolPanelVectorStyle from './../ToolPanel/Figures/Figures.module.scss';

class LayoutBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mousePosition: {
                x: null,
                y: null
            }
        }
    }

    onMouseMove(e) {
        if (this.props.layoutBuilderMode === 'dragNewFigure') {
            this.setState({
                mousePosition: {
                    x: e.pageX,
                    y: e.pageY
                }
            })
        }
    }

    render() {
        const dragNewFigureStyle = {
            left: this.state.mousePosition.x,
            top: this.state.mousePosition.y
        };

        return (
            <div className={styles.layoutBuilder} onMouseMove={this.onMouseMove.bind(this)}>
                <SvgRender/>
                <ToolPanel/>

                {this.props.layoutBuilderMode === 'dragNewFigure' ?
                    <div className={`${toolPanelVectorStyle['new-figure']} ${toolPanelVectorStyle['rectangle']}`}
                         style={dragNewFigureStyle}/> : null}
            </div>
        )
    }
}

const mapStateToProps = ({layoutBuilder}) => ({
    layoutBuilderMode: layoutBuilder.mode
})


const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            changePage: () => push('/about-us')
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LayoutBuilder)
