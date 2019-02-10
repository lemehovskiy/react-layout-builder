import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import VerticalAlignPanel from './VerticalAlignPanel';
import TextAlignPanel from './TextAlignPanel';

class TextPanel extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <VerticalAlignPanel/>
                <TextAlignPanel/>
            </div>
        )
    }
}

export default connect(
    null,
    null
)(TextPanel)
