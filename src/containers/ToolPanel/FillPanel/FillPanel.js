import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ChromePicker} from 'react-color';

import styles from './FillPanel.module.scss';

import {setFillColor} from './../../actions/index';

import {
    getEqualPropertyValueFromSelectedObjects,
} from './../../containers/actions/utils';


class FillPanel extends React.Component {
    handleChangeComplete(color) {
        this.props.setFillColor(color.rgb)
    }

    render() {
        return (
            <div className={styles.error}>
                Fill:

                <ChromePicker
                    color={getEqualPropertyValueFromSelectedObjects(this.props.selectedObjects, 'fill')}
                    onChangeComplete={this.handleChangeComplete.bind(this)}
                />

            </div>
        )
    }
}

const mapStateToProps = ({svgRender, resizeTool}) => ({
    selectedObjects: svgRender.objects.filter(object => svgRender.selectedObjectsId.includes(object.id)),
    selectedObjectsId: svgRender.selectedObjectsId
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            setFillColor
        },
        dispatch
    )


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FillPanel)
