import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ChromePicker} from 'react-color';

import colorPickerStyle from './../colorPicker.module.scss';
import toolPanelStyle from './../index.module.scss';

import {setStrokeColor} from '../../../actions/index';

import {
    getEqualPropertyValueFromSelectedObjects,
} from '../../actions/utils';


class FillPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayColorPicker: false
        }
    }

    handleReset() {
        this.props.setStrokeColor(null)
    }

    handleClickSwatch() {
        this.setState({
            displayColorPicker: !this.state.displayColorPicker
        })
    }

    handleChangeComplete(color) {
        this.setState({
            color: color

        })
        this.props.setStrokeColor(color.rgb)
    }

    render() {
        const equalColorValue = getEqualPropertyValueFromSelectedObjects(this.props.selectedObjects, 'stroke');

        return (
            <div className={`${toolPanelStyle['tool-panel-block']}`}>
                <div className={toolPanelStyle['tool-panel-block__name']}>
                    Line
                </div>

                <div>
                    <div className={colorPickerStyle.swatch} onClick={this.handleClickSwatch.bind(this)}>
                        {equalColorValue === 'none' || equalColorValue === false ?
                            <div className={colorPickerStyle.colorNone}/> :
                            <div style={{background: equalColorValue}} className={colorPickerStyle.color}/>}
                    </div>

                    <button className={colorPickerStyle['reset-btn']} onClick={this.handleReset.bind(this)}>Reset</button>

                    {this.state.displayColorPicker ? <ChromePicker
                        className={colorPickerStyle.colorPicker}
                        color={getEqualPropertyValueFromSelectedObjects(this.props.selectedObjects, 'stroke')}
                        onChangeComplete={this.handleChangeComplete.bind(this)}
                    /> : null}
                </div>

            </div>
        )
    }
}

const mapStateToProps = ({svgRender}) => ({
    selectedObjects: svgRender.objects.filter(object => svgRender.selectedObjectsId.includes(object.id)),
    selectedObjectsId: svgRender.selectedObjectsId
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            setStrokeColor
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FillPanel)
