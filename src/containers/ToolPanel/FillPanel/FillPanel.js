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

    constructor(props) {
        super(props);

        this.state = {
            displayColorPicker: false
        }
    }

    handleReset(){
        this.props.setFillColor(null)
    }

    handleClickSwatch(){
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
        const equalColorValue = getEqualPropertyValueFromSelectedObjects(this.props.selectedObjects, 'fill');

        return (
            <div>
                Fill

                <div className={styles.swatch} onClick={ this.handleClickSwatch.bind(this)}>
                    {equalColorValue === 'none' || equalColorValue === false ? <div className={styles.colorNone}/> : <div style={{background: equalColorValue}} className={styles.color}/>}
                </div>

                <button onClick={this.handleReset.bind(this)}>Reset</button>

                {this.state.displayColorPicker ? <ChromePicker
                    color={getEqualPropertyValueFromSelectedObjects(this.props.selectedObjects, 'fill')}
                    onChangeComplete={this.handleChangeComplete.bind(this)}
                /> : null}

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
            setFillColor
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FillPanel)
