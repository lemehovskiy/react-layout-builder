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
        const {selectedObjectsByHash, setVerticalAlign} = this.props;

        return (
            <div>
                <VerticalAlignPanel setVerticalAlign={setVerticalAlign.bind(this)} activeValue={getEqualPropertyValueFromSelectedObjects(selectedObjectsByHash, 'textProps.verticalAlign')}/>
                <TextAlignPanel setTextAlign={setVerticalAlign.bind(this)} activeValue={getEqualPropertyValueFromSelectedObjects(selectedObjectsByHash, 'textProps.textAlign')}/>
            </div>
        )
    }
}

const mapStateToProps = ({svgRender}) => ({
    selectedObjectsByHash: svgRender.selectedObjectsId.map((item) => svgRender.objectsByHash[item]),
    selectedObjects: svgRender.selectedObjectsId

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
