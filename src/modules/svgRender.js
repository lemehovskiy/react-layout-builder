export const UPDATE_HANDLER_OBJECT_INDEX = 'svgRender/HANDLER_OBJECT_INDEX';

const initialState = {
    objects: [
        {
            "id": 1,
            "width": 163,
            "height": 84,
            "rotate": 0,
            "strokeWidth": 0,
            "fill": "rgba(0, 123, 255, 1)",
            "radius": "0",
            "type": "rectangle",
            "x": 17,
            "y": 15
        },
        {
            "id": 2,
            "width": 100,
            "height": 84,
            "rotate": 0,
            "strokeWidth": 0,
            "fill": "rgba(0, 123, 255, 1)",
            "radius": "0",
            "type": "rectangle",
            "x": 200,
            "y": 50
        }
    ],
    handlerObjectIndex: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_HANDLER_OBJECT_INDEX:
            return {
                ...state,
                handlerObjectIndex: action.index
            }
        default:
            return state
    }
}


export const updateHandlerObjectIndex = (index) => {
    return dispatch => {
        dispatch({
            type: UPDATE_HANDLER_OBJECT_INDEX,
            index: index
        })
    }
}