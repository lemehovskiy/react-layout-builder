import React from 'react'
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import toolPanelVectorStyle from './Figures.module.scss';

import {generateID} from "../../../utils/helpers"

import {setNewFigureDragData} from "../../../actions/layoutBuilderActions"
import {addNewObject} from "../../../actions"


class NewFigureDragHelper extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            mousePosition: {
                x: null,
                y: null
            }
        }
    }

    onMouseUp(e) {
        let svgRenderClientRect = ReactDOM.findDOMNode(this.refs['SvgRenderContainer']).getBoundingClientRect();

        if ((e.pageX > svgRenderClientRect.left && e.pageX < svgRenderClientRect.right) && (e.pageY > svgRenderClientRect.top && e.pageY < svgRenderClientRect.bottom)) {
            this.props.addNewObject({
                    id: generateID(),
                    width: 30,
                    height: 20,
                    stroke: 'rgba(0, 0, 0, 1)',
                    fill: 'none',
                    radius: "0",
                    type: "rectangle",
                    x: this.state.mousePosition.x - svgRenderClientRect.x,
                    y: this.state.mousePosition.y - svgRenderClientRect.y
                }
            )
        }

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
            left: this.state.mousePosition.x,
            top: this.state.mousePosition.y
        };

        return (
            <div style={{position: 'relative'}} onMouseMove={this.onMouseMove.bind(this)}
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
)(NewFigureDragHelper)
