import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {resizeObject} from './../../actions/index';
import {isInt} from './../../containers/actions/utils';

class SizePanel extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange(e) {
        const value = parseInt(e.target.value);
        if (!isInt(value)) return;
        let self = this;
        const object = self.props.selectedObjects[0];

        self.props.resizeObject({
                id: object.id,
                x: null,
                y: null,
                width: e.target.name === 'width' ? value : null,
                height: e.target.name === 'height' ? value : null
            }
        )
    }

    render() {
        return (
            <div>
                Size
                width: <input type="text" pattern="[0-9]*" name="width" disabled={this.props.selectedObjectsId.length !== 1}
                          value={this.props.selectedObjectsId.length === 1 ? this.props.selectedObjects[0].width : ''}
                          onChange={this.onChange.bind(this)}/>
                height: <input type="text" pattern="[0-9]*" name="height" disabled={this.props.selectedObjectsId.length !== 1}
                          value={this.props.selectedObjectsId.length === 1 ? this.props.selectedObjects[0].height : ''}
                          onChange={this.onChange.bind(this)}/>

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
            resizeObject
        },
        dispatch
    )


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SizePanel)
