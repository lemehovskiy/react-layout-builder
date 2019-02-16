import React from 'react'
import {push} from 'connected-react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import SvgRender from '../SvgRender/SvgRender';
import ToolPanel from './../ToolPanel'

import styles from './index.module.scss';

class LayoutBuilder extends React.Component {
    render() {

        return (
            <div className={styles.layoutBuilder}>
                <SvgRender/>
                <ToolPanel/>
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
