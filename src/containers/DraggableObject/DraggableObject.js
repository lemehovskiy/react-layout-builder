import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import SnapHelper from './../SnapHelper/SnapHelperContainer';

import {
    moveObject
} from '../../actions/index'

class FigureDragger extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isDrag: false,
            mouseStartPosition: {
                x: null,
                y: null
            },
            objectPosition: {
                x: null,
                y: null
            }
        }
    }

    componentDidUpdate() {
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

        //TODO prevent move objects out of SVG render
        selectedObjects.forEach(function (object) {
            moveObject({
                ids: [object.id],
                payload: {
                    x: e.clientX - object.editStartPositionOffset.x,
                    y: e.clientY - object.editStartPositionOffset.y
                }
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
                <SnapHelper/>
                {React.Children.map(this.props.children, child => {
                    return React.cloneElement(child, {onMouseDown: this.onChildMouseDown})
                })}
            </g>
        )
    }
}

const mapStateToProps = ({svgRender}) => ({
    selectedObjects: svgRender.selectedObjectsId.map((item) => svgRender.objectsByHash[item]),
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
