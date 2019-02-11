import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import VerticalAlignPanel from './VerticalAlignPanel';
import TextAlignPanel from './TextAlignPanel';

import {
    setTextAlign,
    setVerticalAlign
} from './../../../../src/actions'

import {
    getEqualPropertyValueFromSelectedObjects,
} from './../../../containers/actions/utils';


class TextPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <VerticalAlignPanel setVerticalAlign={setVerticalAlign} activeValue={getEqualPropertyValueFromSelectedObjects(this.props.selectedObjects, 'textProps.verticalAlign')}/>
                <TextAlignPanel setTextAlign={setTextAlign} activeValue={getEqualPropertyValueFromSelectedObjects(this.props.selectedObjects, 'textProps.textAlign')}/>
            </div>
        )
    }
}

const mapStateToProps = ({svgRender}) => ({
    selectedObjects: svgRender.objects.filter(object => svgRender.selectedObjectsId.includes(object.id))
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            setTextAlign,
            setVerticalAlign
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextPanel)
