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
} from '../../../utils/helpers';


class TextPanel extends React.Component {
    render() {
        return (
            <div>
                <VerticalAlignPanel setVerticalAlign={this.props.setVerticalAlign.bind(this)} activeValue={getEqualPropertyValueFromSelectedObjects(this.props.selectedObjects, 'textProps.verticalAlign')}/>
                <TextAlignPanel setTextAlign={this.props.setTextAlign.bind(this)} activeValue={getEqualPropertyValueFromSelectedObjects(this.props.selectedObjects, 'textProps.textAlign')}/>
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
