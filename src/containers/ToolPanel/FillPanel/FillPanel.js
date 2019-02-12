import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ChromePicker} from 'react-color';

import styles from './FillPanel.module.scss';

import {setFillColor} from '../../../actions/index';

import {
    getEqualPropertyValueFromSelectedObjects,
} from '../../actions/utils';


class FillPanel extends React.Component {
    state = {
        displayColorPicker: false
    }

    handleClick(){
        this.setState({
            displayColorPicker: !this.state.displayColorPicker
        })
    }

    handleChangeComplete(color) {
        this.setState({
            color: color
        })
        this.props.setFillColor(color.rgb)
    }

    render() {
        return (
            <div>
                Fill:

                <div className={styles.swatch} onClick={ this.handleClick.bind(this)}>
                    <div style={{background: getEqualPropertyValueFromSelectedObjects(this.props.selectedObjects, 'fill')}} className={styles.color}/>
                </div>

                {this.state.displayColorPicker ? <ChromePicker
                    color={getEqualPropertyValueFromSelectedObjects(this.props.selectedObjects, 'fill')}
                    onChangeComplete={this.handleChangeComplete.bind(this)}
                /> : null}

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
