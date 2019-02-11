import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import TextPanel from './TextPanel';
import SizePanel from './SizePanel';

class ToolPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TextPanel/>
                <SizePanel/>
            </div>
        )
    }
}

export default connect(
    null,
    null
)(ToolPanel)
