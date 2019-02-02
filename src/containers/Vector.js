import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import EditModeHelper from './EditModeHelper.js';

import {
    updateHandlerObjectIndex
} from '../../src/modules/svgRender'

import {
    increment
} from '../../src/modules/counter'


class Vector extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            onHoverMode: false,
            onSelectMode: false
        }
    }

    onMouseOver() {
        this.setState({
            onHoverMode: true
        })
    }

    onMouseOut() {
        this.setState({
            onHoverMode: false
        })
    }

    onMouseClick() {
        this.setState({
            onSelectMode: true
        })
    }

    render() {
        return (
            <g>
                <rect
                    width={this.props.object.width}
                    height={this.props.object.height}
                    x={this.props.object.x}
                    y={this.props.object.y}
                    onMouseOver={this.onMouseOver.bind(this)}
                    onMouseOut={this.onMouseOut.bind(this)}
                    onClick={this.onMouseClick.bind(this)}
                    cursor="move"
                />

                {this.state.onSelectMode ? <EditModeHelper width={this.props.object.width}
                                                           height={this.props.object.height}
                                                           x={this.props.object.x}
                                                           y={this.props.object.y}/> : ''}
            </g>
        )
    }
}

const mapStateToProps = ({svgRender}) => ({})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            updateHandlerObjectIndex,
            increment
        },
        dispatch
    )

export default connect(
    null,
    mapDispatchToProps
)(Vector)
