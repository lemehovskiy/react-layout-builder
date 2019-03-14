import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import SelectTool from './SelectTool'
import {getSelectToolSize, getSelectToolPosition, checkRectRectCollision} from '../../utils/selectTool';
import {getElement, getTargetAttributeName} from "../../utils/dataElements";

import {
    deselectAllObjects,
    selectObjects
} from '../../actions/index'

class SelectToolContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectToolActive: false,
            selectToolStartPoint: {
                x: null,
                y: null
            },
            selectToolSize: {
                width: null,
                height: null
            },
            selectToolPosition: {
                x: null,
                y: null
            }
        }
    }

    componentDidUnmount(){
        let self = this;

        self.svgRenderElement.addEventListener("mousedown", (e) => {
            self.onMouseDown(e);
        })
    }

    componentDidMount() {
        let self = this;
        self.svgRenderElement = getElement('layout-builder', 'svg-render');
        self.svgRenderWrapElement = getElement('layout-builder', 'svg-render-wrap');

        self.svgRenderElement.addEventListener("mousedown", (e) => {
            self.onMouseDown(e);
        })
    }

    getSvgOffset = () => {
        const {x, y} = this.svgRenderElement.getBoundingClientRect();
        return {offsetX: x, offsetY: y}
    }

    onMouseMove = (e) => this.updateSelectToolData({x: e.clientX, y: e.clientY});

    onMouseUp = () => {
        let self = this;
        const {selectToolActive} = this.state;

        document.removeEventListener("mouseup", (e) => {
            self.onMouseUp(e);
        })
        self.svgRenderWrapElement.removeEventListener("mousemove", (e) => {
            self.onMouseMove(e);
        })

        if (selectToolActive) {
            this.endSelect();
        }
    }

    onMouseDown = (e) => {
        let self = this;

        if (getTargetAttributeName(e) === 'svg-render') {
            self.svgRenderWrapElement.addEventListener("mousemove", (e) => {
                self.onMouseMove(e);
            })
            document.addEventListener("mouseup", (e) => {
                self.onMouseUp(e);
            })

            this.setState({
                selectToolActive: true
            })
            this.startSelect({mouseX: e.clientX, mouseY: e.clientY});
        }
    }

    setSelectStartPosition(mousePosition) {
        const {offsetX, offsetY} = this.getSvgOffset();
        this.setState({
            selectToolStartPoint: {
                x: mousePosition.x - offsetX,
                y: mousePosition.y - offsetY
            }
        })
    }

    startSelect({mouseX, mouseY}) {
        this.setSelectStartPosition({x: mouseX, y: mouseY});
        this.updateSelectToolData({x: mouseX, y: mouseY});
    }

    endSelect() {
        this.handleSelectTool();
        this.resetSelectToolData();
    }

    handleSelectTool() {
        const {selectToolPosition, selectToolSize} = this.state;
        const {deselectAllObjects, selectObjects, objectsById, objectsByHash} = this.props;

        deselectAllObjects();

        if (selectToolSize.width === null || selectToolSize.height === null) return;

        let selectedObjectIds = [];
        objectsById.forEach((item) => {
            const object = objectsByHash[item];
            if (checkRectRectCollision({
                        x: object.x,
                        y: object.y,
                        width: object.width,
                        height: object.height
                    },
                    {
                        x: selectToolPosition.x,
                        y: selectToolPosition.y,
                        width: selectToolSize.width,
                        height: selectToolSize.height
                    })) {
                selectedObjectIds.push(object.id);

            }
        })

        if (selectedObjectIds.length) {
            selectObjects(selectedObjectIds)
        }
    }

    resetSelectToolData() {
        this.setState({
            selectToolActive: false,
            selectToolStartPoint: {x: null, y: null},
            selectToolSize: {width: null, height: null},
            selectToolPosition: {x: null, y: null},
        });
    }

    updateSelectToolData(mousePosition) {
        const {offsetX, offsetY} = this.getSvgOffset();
        const svgOffset = {x: offsetX, y: offsetY};
        const {selectToolStartPoint} = this.state;

        if (selectToolStartPoint.x === null) return;

        const selectToolSize = getSelectToolSize(
            selectToolStartPoint,
            mousePosition,
            svgOffset
        );
        const selectToolPosition = getSelectToolPosition(
            selectToolStartPoint,
            mousePosition,
            svgOffset,
            selectToolSize
        );

        this.setState({
            selectToolPosition: selectToolPosition,
            selectToolSize: selectToolSize
        })
    }

    render() {
        const {selectToolActive, selectToolPosition, selectToolSize} = this.state;
        return selectToolActive ? <SelectTool selectToolPosition={selectToolPosition} selectToolSize={selectToolSize}/> : null
    }
}

const mapStateToProps = ({svgRender}) => ({
    objectsByHash: svgRender.objectsByHash,
    objectsById: svgRender.objectsById,

})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            deselectAllObjects,
            selectObjects
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectToolContainer)
