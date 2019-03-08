import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import NumericInput from 'react-numeric-input';

import {resizeObjects} from './../../actions/index';

import style from './index.module.scss';

import {
    getEqualPropertyValueFromSelectedObjects,
} from '../../utils/helpers';

class SizePanel extends React.Component {
    onChange(name, value) {
        let self = this;
        const payload = name === 'width' ? {width: value} : {height: value};

        self.props.resizeObjects({
                ids: this.props.selectedObjectsId,
                payload: payload

            }
        )
    }

    render() {
        return (
            <div className={`${style['tool-panel-block']} ${style['tool-panel-block-size']}`}>
                <div className={style['tool-panel-block__name']}>
                    Size
                </div>
                <div className={style['input-group']}>
                    <div className={style['input-group-item']}>
                        <NumericInput
                            value={getEqualPropertyValueFromSelectedObjects(this.props.selectedObjects, 'width')}
                            name="width"
                            onChange={this.onChange.bind(this, 'width')}/>
                        Width

                    </div>

                    <div className={style['input-group-item']}>
                        <NumericInput
                            value={getEqualPropertyValueFromSelectedObjects(this.props.selectedObjects, 'height')}
                            name="height"
                            onChange={this.onChange.bind(this, 'height')}/>
                        Height
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({svgRender, resizeTool}) => ({
    selectedObjects: svgRender.selectedObjectsId.map((item) => svgRender.objectsByHash[item]),
    selectedObjectsId: svgRender.selectedObjectsId
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            resizeObjects
        },
        dispatch
    )


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SizePanel)
