import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ChromePicker} from 'react-color';

import colorPickerStyle from './../colorPicker.module.scss';
import toolPanelStyle from './../index.module.scss';

import {setStrokeColor, setStrokeWidth} from '../../../actions/index';
import NumericInput from 'react-numeric-input';

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

    onChangeStrokeWidth(name, value) {
        let self = this;

        self.props.setStrokeWidth(value);
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

                    <button className={colorPickerStyle['reset-btn']} onClick={this.handleReset.bind(this)}>Reset
                    </button>

                    {this.state.displayColorPicker ? <ChromePicker
                        className={colorPickerStyle.colorPicker}
                        color={getEqualPropertyValueFromSelectedObjects(this.props.selectedObjects, 'stroke')}
                        onChangeComplete={this.handleChangeComplete.bind(this)}
                    /> : null}

                    <div className={toolPanelStyle['input-group']}>
                        <div className={toolPanelStyle['input-group-item']}>
                            <NumericInput
                                value={getEqualPropertyValueFromSelectedObjects(this.props.selectedObjects, 'strokeWidth')}
                                onChange={this.onChangeStrokeWidth.bind(this)}/>
                        </div>
                    </div>
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
            setStrokeColor,
            setStrokeWidth
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FillPanel)
