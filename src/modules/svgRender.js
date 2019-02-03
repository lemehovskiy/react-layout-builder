export const UPDATE_HANDLER_OBJECT_INDEX = 'svgRender/HANDLER_OBJECT_INDEX';
export const UPDATE_MOUSE_COORDINATES = 'svgRender/UPDATE_MOUSE_COORDINATES';
export const UPDATE_EDIT_MODE = 'svgRender/UPDATE_EDIT_MODE';
export const SET_EDIT_START_POINT = 'svgRender/SET_EDIT_START_POINT';
export const UPDATE_OBJECT_SELECT_STATE = 'svgRender/UPDATE_OBJECT_SELECT_STATE';
export const DESELECT_ALL_OBJECTS = 'svgRender/DESELECT_ALL_OBJECTS';
export const DESELECT_ALL_OBJECTS_EXEPT = 'svgRender/DESELECT_ALL_OBJECTS_EXEPT';
export const MOVE_OBJECT = 'svgRender/MOVE_OBJECT';
export const SET_EDIT_START_POSITION_OFFSET = 'svgRender/SET_EDIT_START_POSITION_OFFSET';


const initialState = {
    editMode: null,
    mousePosition: {
        x: null,
        y: null
    },
    editStartPoint: {
        x: null,
        y: null
    },

    handlerObjectIndex: null,

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
            "y": 15,
            "selected": false
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
            "y": 50,
            "selected": false
        }
    ]
};

export default (state = initialState, action) => {
    let updatedItems = [];

    switch (action.type) {
        case UPDATE_HANDLER_OBJECT_INDEX:
            return {
                ...state,
                handlerObjectIndex: action.index
            }
        case UPDATE_MOUSE_COORDINATES:
            return {
                ...state,
                mousePosition: {
                    x: action.x,
                    y: action.y
                }
            }
        case UPDATE_EDIT_MODE:
            return {
                ...state,
                editMode: action.mode
            }
        case SET_EDIT_START_POINT:
            return {
                ...state,
                editStartPoint: {x: action.x, y: action.y}
            }
        case UPDATE_OBJECT_SELECT_STATE:

            updatedItems = state.objects.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, selected: action.payload.switchTo}
                }
                return item
            })
            return {...state, objects: updatedItems}

        case DESELECT_ALL_OBJECTS:
            updatedItems = state.objects.map(item => {
                return {...item, selected: false}
            })
            return {...state, objects: updatedItems}

        case DESELECT_ALL_OBJECTS_EXEPT:

            console.log('000');
            updatedItems = state.objects.map(item => {
                if (item.id === action.payload) {
                    return item;
                }
                return {...item, selected: false}
            })

            console.log(updatedItems)
            return {...state, objects: updatedItems}

        case MOVE_OBJECT:
            updatedItems = state.objects.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, x: action.payload.x, y: action.payload.y}
                }
                return item;
            })
            return {...state, objects: updatedItems}

        case SET_EDIT_START_POSITION_OFFSET:
            updatedItems = state.objects.map(item => {
                if (item.selected) {
                    return {
                        ...item,
                        editStartPositionOffset: {
                            x: action.payload.x - item.x,
                            y: action.payload.y - item.y
                        }
                    }
                }
                return item
            })
            return {...state, objects: updatedItems}

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

export const updateMouseCoordinates = (x, y) => {
    return dispatch => {
        dispatch({
            type: UPDATE_MOUSE_COORDINATES,
            x: x,
            y: y
        })

    }
}


export const updateEditMode = (mode) => {
    return dispatch => {
        dispatch({
            type: UPDATE_EDIT_MODE,
            mode: mode
        })

    }
}

export const setEditStartPoint = (x, y) => {
    return dispatch => {
        dispatch({
            type: SET_EDIT_START_POINT,
            x: x,
            y: y
        })

    }
}

export const updateObjectSelectState = (id) => {
    return dispatch => {
        dispatch({
            type: UPDATE_OBJECT_SELECT_STATE,
            payload: {
                id: id,
                switchTo: true
            }
        })
    }
}

export const deselectAllObjects = () => {
    return dispatch => {
        dispatch({
            type: DESELECT_ALL_OBJECTS,
        })
    }
}

export const deselectAllObjectsExept = (id) => {
    return dispatch => {
        dispatch({
            type: DESELECT_ALL_OBJECTS_EXEPT,
            payload: id
        })
    }
}


export const moveObject = (id, x, y) => {
    return dispatch => {
        dispatch({
            type: MOVE_OBJECT,
            payload: {
                id: id,
                x: x,
                y: y
            }
        })
    }
}

export const setEditStartPositionOffset = (x, y) => {
    return dispatch => {
        dispatch({
            type: SET_EDIT_START_POSITION_OFFSET,
            payload: {
                x: x,
                y: y
            }
        })
    }
}