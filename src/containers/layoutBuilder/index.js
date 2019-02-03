import React from 'react'
import {push} from 'connected-react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import SvgRender from '../SvgRender';

class LayoutBuilder extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <SvgRender/>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            changePage: () => push('/about-us')
        },
        dispatch
    )

export default connect(
    null,
    mapDispatchToProps
)(LayoutBuilder)
