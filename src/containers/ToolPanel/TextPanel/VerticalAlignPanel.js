import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {
    setVerticalAlign
} from './../../../../src/actions'

class VerticalAlignPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick(e){
        this.props.setVerticalAlign(e.target.value)
    }

    render() {
        return (
            <div>
                Vertical Align

                <div className="btn-group">
                    <button value="top" onClick={this.onClick.bind(this)}>Top</button>
                    <button value="middle" onClick={this.onClick.bind(this)}>Middle</button>
                    <button value="bottom" onClick={this.onClick.bind(this)}>Bottom</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            setVerticalAlign
        },
        dispatch
    )

export default connect(
    null,
    mapDispatchToProps
)(VerticalAlignPanel)
