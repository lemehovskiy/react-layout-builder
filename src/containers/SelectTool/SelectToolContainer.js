import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import SelectTool from './SelectTool'
import {getSelectToolSize, getSelectToolPosition, checkRectRectCollision} from '../../utils/selectTool';

import {
    deselectAllObjects,
    selectObjects
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
        this.setOffset();
        window.addEventListener('resize', this.onResize)
    }

    onResize = () => {
        this.setOffset();
    }

    setOffset = () => {
        const {x, y} = this.selectToolContainerRef.current.getBoundingClientRect();
        this.setState({
            svgOffset: {
                x: x,
                y: y
            }
        })
    }

    onMouseMove = (e) => this.updateSelectToolData({x: e.clientX, y: e.clientY});

    onMouseUp = () => this.endSelect();

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

    startSelect({mouseX, mouseY}) {
        this.setState({
            selectToolActive: true
        })
        this.setSelectStartPosition({x: mouseX, y: mouseY});
        this.updateSelectToolData({x: mouseX, y: mouseY});
    }

    endSelect() {
        this.resetSelectToolData();
        this.handleSelectTool();
    }

    handleSelectTool() {
        const {selectToolPosition, selectToolSize} = this.state;
        const {deselectAllObjects, selectObjects, objects} = this.props;

        if (selectToolSize.x === null || selectToolSize.y === null) return;

        let selectedObjectIds = [];
        objects.forEach(function (object) {
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

        deselectAllObjects();

        if (selectedObjectIds.length) {
            selectObjects(selectedObjectIds)
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
        const {selectToolStartPoint, svgOffset} = this.state;
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
        const {children} = this.props;
        const {selectToolActive, selectToolPosition, selectToolSize} = this.state;
        return (
            <div
                onMouseDown={this.onMouseDown}
                onMouseMove={this.onMouseMove}
                onMouseUp={this.onMouseUp}
                ref={this.selectToolContainerRef}
                className="select-tool-wrap"
            >
                {children}
                {selectToolActive ?
                    <SelectTool selectToolPosition={selectToolPosition} selectToolSize={selectToolSize}/> : null}
            </div>
        )
    }
}

const mapStateToProps = ({svgRender}) => ({
    objects: svgRender.objects
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
