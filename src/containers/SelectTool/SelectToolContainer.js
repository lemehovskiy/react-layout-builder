import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import SelectTool from './SelectTool'
import {getSelectToolSize, getSelectToolPosition, checkRectRectCollision} from '../../utils/selectTool';

import {
    updateEditMode,
    deselectAllObjects,
    moveObject,
    selectObjects,
    resizeObjects,
    resetObjectMode,
    rotateObject
} from '../../actions/index'

class SelectToolContainer extends React.Component {
    constructor(props) {
        super(props);

        this.selectToolContainerRef = React.createRef();

        this.state = {
            selectToolActive: false,
            selectToolStartPoint: {
                x: null,
                y: null
            },
            selectToolSize: {
                x: null,
                y: null
            },
            selectToolPosition: {
                x: null,
                y: null
            },
            svgOffset: {
                x: null,
                y: null
            }
        }
    }

    componentDidMount() {
        const getBoundingClientRect = this.selectToolContainerRef.current.getBoundingClientRect();
        this.setState({
            svgOffset: {
                x: getBoundingClientRect.x,
                y: getBoundingClientRect.y
            }
        })
    }

    onMouseMove = (e) => {
        this.updateSelectToolData({x: e.clientX, y: e.clientY});
    }


    onMouseUp = () => {
        this.endSelect();
    }

    onMouseDown = (e) => {
        if (e.target.id === 'svg-render') {
            this.startSelect({mouseX: e.clientX, mouseY: e.clientY});
        }
    }

    setSelectStartPosition(mousePosition) {
        this.setState({
            selectToolStartPoint: {
                x: mousePosition.x - this.state.svgOffset.x,
                y: mousePosition.y - this.state.svgOffset.y
            }
        })
    }

    startSelect({mouseX, mouseY}){
        this.setState({
            selectToolActive: true
        })
        this.setSelectStartPosition({x: mouseX, y: mouseY});
        this.updateSelectToolData({x:mouseX, y: mouseY});
    }

    endSelect(){
        this.resetSelectToolData();
        this.handleSelectTool();
    }

    handleSelectTool() {
        let self = this;
        let selectedObjectIds = [];
        if (self.state.selectToolSize.x === null || self.state.selectToolSize.y === null) return;

        this.props.objects.forEach(function (object) {
            if (checkRectRectCollision({
                        x: object.x,
                        y: object.y,
                        width: object.width,
                        height: object.height
                    },
                    {
                        x: self.state.selectToolPosition.x,
                        y: self.state.selectToolPosition.y,
                        width: self.state.selectToolSize.width,
                        height: self.state.selectToolSize.height
                    })) {
                selectedObjectIds.push(object.id);
            }
        })

        this.props.deselectAllObjects();

        if (selectedObjectIds.length) {
            this.props.selectObjects(selectedObjectIds)
        }
    }

    resetSelectToolData() {
        this.setState({
            selectToolActive: false,
            selectToolStartPoint: {x: null, y: null},
            selectToolSize: {x: null, y: null}
        });
    }

    updateSelectToolData(mousePosition) {
        if (this.state.selectToolStartPoint.x === null) return;

        const selectToolSize = getSelectToolSize(
            this.state.selectToolStartPoint,
            mousePosition,
            this.state.svgOffset
        );

        this.setState({
            selectToolSize: selectToolSize
        })
        const selectToolPosition = getSelectToolPosition(
            this.state.selectToolStartPoint,
            mousePosition,
            this.state.svgOffset,
            selectToolSize
        );

        this.setState({
            selectToolPosition: selectToolPosition
        })
    }


    render() {
        const {children} = this.props;
            const {selectToolActive, selectToolPosition, selectToolSize} = this.state;
        return (
            <div
                onMouseDown={this.onMouseDown}
                onMouseMove={this.onMouseMove}
                onMouseUp={this.onMouseUp}
                ref={this.selectToolContainerRef}
            >
                {children}
                {selectToolActive ?
                    <SelectTool selectToolPosition={selectToolPosition} selectToolSize={selectToolSize}/> : null}
            </div>
        )
    }
}

const mapStateToProps = ({svgRender, resizeTool, layoutBuilder}) => ({
    selectedObjects: svgRender.objects.filter(object => svgRender.selectedObjectsId.includes(object.id)),
    selectedObjectsId: svgRender.selectedObjectsId,
    objects: svgRender.objects,
    editMode: svgRender.editMode,
    mouseStartPosition: layoutBuilder.mouseStartPosition,
    editObjectInitState: svgRender.editObjectInitState,
    resizeToolDirection: resizeTool.resizeDirection
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            updateEditMode,
            deselectAllObjects,
            moveObject,
            selectObjects,
            resizeObjects,
            resetObjectMode,
            rotateObject
        },
        dispatch
    )


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectToolContainer)
