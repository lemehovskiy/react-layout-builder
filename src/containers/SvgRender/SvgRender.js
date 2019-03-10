import React, {useRef} from 'react'
import Object from '../Figures/Object';
import Rectangle from '../Figures/Rectangle';
import Text from '../Figures/Text';
import DraggableObject from '../DraggableObject/DraggableObject';

class SvgRender extends React.Component {
    constructor(props) {
        super(props);
        this.objectChild = React.createRef();
    }

    onMouseDown = (e) => {
        if (e.target.id === 'svg-render') {
            this.objectChild.resetMode();
        }
    }

    render(){
        const {objectsById, objectsByHash, selectedObjectsId} = this.props;

        return (
            <svg id="svg-render" width='800' height='500' onMouseDown={this.onMouseDown.bind(this)}>

                <DraggableObject>
                    {objectsById.map((item, index) => {
                        let vectorType = null;
                        switch (objectsByHash[item].type) {
                            case 'rectangle': {
                                vectorType = <Rectangle/>;
                                break;
                            }
                            case 'text': {
                                vectorType = <Text/>;
                                break;
                            }
                            default: {
                                break;
                            }
                        }
                        return (
                            <Object onRef={ref => (this.objectChild = ref)} key={index} object={objectsByHash[item]} selectedObjectsId={selectedObjectsId}>
                                {vectorType}
                            </Object>
                        )
                    })}
                </DraggableObject>
            </svg>
        )
    }
}

export default SvgRender
