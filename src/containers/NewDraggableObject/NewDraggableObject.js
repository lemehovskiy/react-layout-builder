import React from 'react'

const NewDraggableObject = () => {

    const recursiveCloneChildren = (children) => {
        return React.Children.map(children, child => {
            let childProps = {};
            if (React.isValidElement(child)) {
                childProps = {ref: child.ref};
            }
            childProps.children = this.recursiveCloneChildren(child.props.children);

            return React.cloneElement(child, childProps);
        })
    }

    const dragItemPosition = {
        left: this.state.objectPosition.x,
        top: this.state.objectPosition.y
    };

    return (
        <div className="new-figure-drag-helper" onMouseMove={this.onMouseMove.bind(this)}
             onMouseUp={this.onMouseUp.bind(this)}>
            {recursiveCloneChildren(this.props.children)}

            {this.props.newFigureDragData !== null ?
                <div className={`${toolPanelVectorStyle['new-figure']} ${toolPanelVectorStyle['rectangle']}`}
                     style={dragItemPosition}/> : null}
        </div>
    );
}


export default NewDraggableObject
