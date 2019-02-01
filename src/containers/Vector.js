import React from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import {
    updateHandlerObjectIndex
} from '../../src/modules/svgRender'

import {
    increment
} from '../../src/modules/counter'


class Vector extends React.Component {

    constructor(props) {
        super(props);
    }

    onMouseOver() {
        this.props.updateHandlerObjectIndex(this.props.object.id);
    }

    onMouseOut() {
        this.props.updateHandlerObjectIndex(null);
    }

    render() {
        return (
            <rect
                width={this.props.object.width}
                height={this.props.object.height}
                x={this.props.object.x}
                y={this.props.object.y}
                onMouseOver={this.onMouseOver.bind(this)}
                onMouseOut={this.onMouseOut.bind(this)}
            />
        )
    }
}

const mapStateToProps = ({ svgRender }) => ({

})

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
