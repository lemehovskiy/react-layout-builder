import React from 'react'
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import toolPanelVectorStyle from '../ToolPanel/Figures/Figures.module.scss';

import {generateID, isMouseOnElement} from "../../utils/helpers"

import {setNewFigureDragData} from "../../actions/layoutBuilderActions"
import {addNewObject} from "../../actions/index"

// import NewDraggableObject from './NewDraggableObject';

class NewDraggableObjectContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            objectPosition: {
                x: null,
                y: null
            }
        }
    }

    onMouseUp = (e) => {
        if (this.props.newFigureDragData === null) return;

        const svgRenderClientRect = ReactDOM.findDOMNode(this.refs['SvgRenderContainer']);
        const mousePosition = {x: e.clientX, y: e.clientY};

        if (isMouseOnElement(svgRenderClientRect, mousePosition)) {
            this.props.addNewObject({
                    id: generateID(),
                    width: 30,
                    height: 20,
                    stroke: 'rgba(0, 0, 0, 1)',
                    fill: 'none',
                    radius: "0",
                    type: "rectangle",
                    x: this.state.objectPosition.x,
                    y: this.state.objectPosition.y
                }
            )
        }
        this.resetData();

    }

    resetData() {
        this.props.setNewFigureDragData(null);
        this.setState({
            mousePosition: {
                x: null,
                y: null
            }
        })
    }

    getOffset = () => {
        const {x, y} = ReactDOM.findDOMNode(this.refs['SvgRenderContainer']).getBoundingClientRect();
        return {offsetX: x, offsetY: y}
    }

    onMouseMove = (e) => {
        if (this.props.newFigureDragData === null) return;

        const {offsetX, offsetY} = this.getOffset()
        if (this.props.newFigureDragData !== null) {
            this.setState({
                objectPosition: {
                    x: e.clientX - offsetX + this.props.newFigureDragData.figureOffset.x,
                    y: e.clientY - offsetY + this.props.newFigureDragData.figureOffset.y
                }
            })
        }
    }

    recursiveCloneChildren(children) {
        return React.Children.map(children, child => {
            let childProps = {};
            if (React.isValidElement(child)) {
                childProps = {ref: child.ref};
            }
            childProps.children = this.recursiveCloneChildren(child.props.children);

            return React.cloneElement(child, childProps);
        })
    }

    render() {
        const dragItemPosition = {
            left: this.state.objectPosition.x,
            top: this.state.objectPosition.y
        };

        return (
            <div className="new-figure-drag-helper" onMouseMove={this.onMouseMove.bind(this)}
                 onMouseUp={this.onMouseUp.bind(this)}>
                {this.recursiveCloneChildren(this.props.children)}

                {this.props.newFigureDragData !== null ?
                    <div className={`${toolPanelVectorStyle['new-figure']} ${toolPanelVectorStyle['rectangle']}`}
                         style={dragItemPosition}/> : null}
            </div>
        );
    }
}

const mapStateToProps = ({layoutBuilder}) => ({
    newFigureDragData: layoutBuilder.newFigureDragData
})


const mapDispatchToProps = dispatch =>
    bindActionCreators({
        setNewFigureDragData,
        addNewObject
    }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewDraggableObjectContainer)
