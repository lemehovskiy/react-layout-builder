import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {moveObject} from './../../actions/index';
import {isInt} from './../../containers/actions/utils';

class SizePanel extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange(e) {
        const value = parseInt(e.target.value);

        if (!isInt(value)) return;

        let self = this;

        e.persist();

        if (e.target.name === 'x') {
            self.props.moveObject(self.props.selectedObjects[0].id, value, null);
        }
        else if (e.target.name === 'y') {
            self.props.moveObject(self.props.selectedObjects[0].id, null, value);
        }
    }

    render() {
        return (
            <div>
                Size
                x: <input type="number" name="x" disabled={this.props.selectedObjectsId.length !== 1}
                          value={this.props.selectedObjectsId.length === 1 ? this.props.selectedObjects[0].x : ''}
                          onChange={this.onChange.bind(this)}/>
                y: <input type="number" name="y" disabled={this.props.selectedObjectsId.length !== 1}
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
)(SizePanel)
