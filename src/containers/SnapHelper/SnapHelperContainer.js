import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {
} from '../../actions/index'

class SelectToolContainer extends React.PureComponent {
    constructor(props) {
        super(props);
    }



    render() {
        let {objectsByHash, selectedObjects, selectedObjectsId, objectsById} = this.props;

        const unselectedObjectId = objectsById.filter(id => !selectedObjectsId.includes(id))

        // console.log(objectsByHash);


        selectedObjects.forEach(id => {
            const selectedObject = objectsByHash[id];



            unselectedObjectId.forEach(id => {

                const unselectedObject = objectsByHash[id];
                console.log(objectsByHash[id])
            })
        })
        // console.log(unselectedObjectId);
        // console.log(selectedObjectsId);
        // console.log(objectsById);

        return (
           <g>
               <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
           </g>
        )
    }
}

const mapStateToProps = ({svgRender}) => ({
    objectsByHash: svgRender.objectsByHash,
    objectsById: svgRender.objectsById,
    selectedObjects: svgRender.selectedObjectsId.map((item) => svgRender.objectsByHash[item]),
    selectedObjectsId: svgRender.selectedObjectsId
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({

        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectToolContainer)
