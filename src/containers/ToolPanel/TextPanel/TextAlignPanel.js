import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {
    setTextAlign
} from './../../../../src/actions'

class VerticalAlignPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick(e){
        this.props.setTextAlign(e.target.value)
    }

    render() {
        return (
            <div>
                Vertical Align

                <div className="btn-group">
                    <button value="left" onClick={this.onClick.bind(this)}>Left</button>
                    <button value="center" onClick={this.onClick.bind(this)}>Center</button>
                    <button value="right" onClick={this.onClick.bind(this)}>Right</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators( {
            setTextAlign
        },
        dispatch
    )

export default connect(
    null,
    mapDispatchToProps
)(VerticalAlignPanel)
