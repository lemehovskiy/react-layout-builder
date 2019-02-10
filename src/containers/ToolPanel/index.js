import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import TextPanel from './TextPanel';

class ToolPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TextPanel/>
            </div>
        )
    }
}

export default connect(
    null,
    null
)(ToolPanel)
