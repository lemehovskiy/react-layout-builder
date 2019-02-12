import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {moveObject} from './../../actions/index';
import {isInt} from './../../containers/actions/utils';

class PositionPanel extends React.Component {
    onChange(e) {
        const value = parseInt(e.target.value);

        if (!isInt(value)) return;

        let self = this;
        self.props.moveObject(self.props.selectedObjects[0].id, e.target.name === 'x' ? value : null, e.target.name === 'y' ? value : null);
    }

    render() {
        return (
            <div>
                Position
                x: <input pattern="[0-9]*" name="x" disabled={this.props.selectedObjectsId.length !== 1}
                          value={this.props.selectedObjectsId.length === 1 ? this.props.selectedObjects[0].x : ''}
                          onChange={this.onChange.bind(this)}/>
                y: <input pattern="[0-9]*" name="y" disabled={this.props.selectedObjectsId.length !== 1}
                          value={this.props.selectedObjectsId.length === 1 ? this.props.selectedObjects[0].y : ''}
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
            moveObject
        },
        dispatch
    )


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PositionPanel)
