import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import toolPanelVectorStyle from './Figures.module.scss';

import {setNewFigureDragData} from "../../../actions/layoutBuilderActions"

class NewFigureDragHelper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mousePosition: {
                x: null,
                y: null
            }
        }
    }

    onMouseUp(){
        this.props.setNewFigureDragData(null);
        this.setState({
            mousePosition: {
                x: null,
                y: null
            }
        })
    }

    onMouseMove(e) {
        if (this.props.newFigureDragData !== null) {
            this.setState({
                mousePosition: {
                    x: e.pageX + this.props.newFigureDragData.figureOffset.x,
                    y: e.pageY + this.props.newFigureDragData.figureOffset.y
                }
            })
        }
    }

    render() {
        const dragItemPosition = {
            left: this.state.mousePosition.x,
            top: this.state.mousePosition.y
        };
        console.log(this.props.children);

        return (
            <div style={{ position: 'relative' }}onMouseMove={this.onMouseMove.bind(this)} onMouseUp={this.onMouseUp.bind(this)}>
                {this.props.children}

                {this.props.newFigureDragData !== null ?
                    <div className={`${toolPanelVectorStyle['new-figure']} ${toolPanelVectorStyle['rectangle']}`}
                         style={dragItemPosition}/> : null}
            </div>
        )
    }
}

const mapStateToProps = ({layoutBuilder}) => ({
    newFigureDragData: layoutBuilder.newFigureDragData
})


const mapDispatchToProps = dispatch =>
    bindActionCreators({
            setNewFigureDragData
        }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewFigureDragHelper)
