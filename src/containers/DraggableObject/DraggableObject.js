import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {
    moveObject
} from '../../actions/index'

class FigureDragger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrag: false,
            mouseStartPosition: {
                x: null,
                y: null
            }
        }
    }

    componentDidUpdate(){
        if (this.state.isDrag) {
            document.addEventListener('mousemove', this.onMouseMove)
            document.addEventListener('mouseup', this.onMouseUp)
        }
        else {
            document.removeEventListener('mousemove', this.onMouseMove)
            document.removeEventListener('mouseup', this.onMouseUp)
        }
    }

    onMouseMove = (e) => {
        let {isDrag} = this.state;
        let {selectedObjects, moveObject} = this.props;

        if (!isDrag) return;

        selectedObjects.forEach(function (object) {
            moveObject({
                ids: [object.id],
                x: e.clientX - object.editStartPositionOffset.x,
                y: e.clientY - object.editStartPositionOffset.y
            });
        })

    }

    onMouseUp = (e) => {
        this.setState({
            isDrag: false
        })
    }

    onChildMouseDown = (e) => {
        this.setState({
            isDrag: true,
            mouseStartPosition: {
                x: e.clientX,
                y: e.clientY
            }
        })
    }


    render() {
        return (
            <g>
                {React.Children.map(this.props.children, child => {
                    return React.cloneElement(child, {onMouseDown: this.onChildMouseDown })
                })}

            </g>
        )
    }

}

const mapStateToProps = ({svgRender, resizeTool, layoutBuilder}) => ({
    selectedObjects: svgRender.objects.filter(object => svgRender.selectedObjectsId.includes(object.id)),
    selectedObjectsId: svgRender.selectedObjectsId
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            moveObject
        },
        dispatch
    )


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FigureDragger)
