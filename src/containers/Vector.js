import React from 'react'
import {connect} from 'react-redux'

class Vector extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <rect
                width='200'
                height='200'/>
        )
    }
}


export default connect(
    null,
    null
)(Vector)
