import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import TextPanel from './TextPanel';
import SizePanel from './SizePanel';
import PositionPanel from './PositionPanel';

class ToolPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TextPanel/>
                <PositionPanel/>
                <SizePanel/>
            </div>
        )
    }
}

export default connect(
    null,
    null
)(ToolPanel)
