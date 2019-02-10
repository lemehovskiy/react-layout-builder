import React from 'react'
import {push} from 'connected-react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import SvgRender from '../SvgRender';
import ToolPanel from './../ToolPanel'

class LayoutBuilder extends React.Component {
    render() {

        return (
            <div>
                <ToolPanel/>
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
