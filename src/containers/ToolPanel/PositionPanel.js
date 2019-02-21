import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import NumericInput from 'react-numeric-input';

import {moveObject} from './../../actions/index';

import style from './index.module.scss';

import {
    getEqualPropertyValueFromSelectedObjects,
} from '../../utils/helpers';

class PositionPanel extends React.Component {
    onChange(name, value) {
        let self = this;

        self.props.moveObject({
                ids: this.props.selectedObjectsId,
                x: name === 'x' ? value : null,
                y: name === 'y' ? value : null
            }
        );
    }

    render() {
        return (
            <div className={`${style['tool-panel-block']} ${style['tool-panel-block-position']}`}>
                <div className={style['tool-panel-block__name']}>
                    Position
                </div>
                <div className={style['input-group']}>
                    <div className={style['input-group-item']}>
                        <NumericInput
                            value={getEqualPropertyValueFromSelectedObjects(this.props.selectedObjects, 'x')}
                            name="x"
                            onChange={this.onChange.bind(this, 'x')}/>
                        Left

                    </div>

                    <div className={style['input-group-item']}>
                        <NumericInput
                            value={getEqualPropertyValueFromSelectedObjects(this.props.selectedObjects, 'y')}
                            name="y"
                            onChange={this.onChange.bind(this, 'y')}/>
                        Top
                    </div>
                </div>

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
            moveObject
        },
        dispatch
    )


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PositionPanel)
