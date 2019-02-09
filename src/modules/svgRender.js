export const UPDATE_HANDLER_OBJECT_INDEX = 'svgRender/HANDLER_OBJECT_INDEX';
export const UPDATE_EDIT_MODE = 'svgRender/UPDATE_EDIT_MODE';
export const SET_MOUSE_START_POSITION = 'svgRender/SET_MOUSE_START_POSITION';
export const SET_OBJECTS_SELECT_STATE = 'svgRender/UPDATE_OBJECTS_SELECT_STATE';
export const DESELECT_ALL_OBJECTS = 'svgRender/DESELECT_ALL_OBJECTS';
export const DESELECT_ALL_OBJECTS_EXEPT = 'svgRender/DESELECT_ALL_OBJECTS_EXEPT';
export const MOVE_OBJECT = 'svgRender/MOVE_OBJECT';
export const SET_OBJECT_EDIT_START_POSITION = 'svgRender/SET_OBJECT_EDIT_START_POSITION';
export const RESIZE_OBJECT = 'svgRender/RESIZE_OBJECT';
export const SET_OBJECT_MODE = 'svgRender/SET_OBJECT_MODE';
export const SAVE_EDIT_OBJECT_INIT_STATE = 'svgRender/SAVE_EDIT_OBJECT_INIT_STATE';
export const RESET_OBJECT_MODE = 'svgRender/RESET_OBJECT_MODE';
export const ROTATE_OBJECT = 'svgRender/ROTATE_OBJECT';


const initialState = {
    editMode: null,
    mousePosition: {
        x: null,
        y: null
    },
    mouseStartPosition: {
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
    ],
    editObjectInitState: null
};

export default (state = initialState, action) => {
    let updatedItems = [];

    switch (action.type) {
        case UPDATE_HANDLER_OBJECT_INDEX:
            return {
                ...state,
                handlerObjectIndex: action.index
            }
        case UPDATE_EDIT_MODE:
            return {
                ...state,
                editMode: action.mode
            }
        case SET_MOUSE_START_POSITION:
            return {
                ...state,
                mouseStartPosition: {x: action.x, y: action.y}
            }
        case SET_OBJECTS_SELECT_STATE:
            updatedItems = state.objects.map(item => {
                if (action.payload.ids.includes(item.id)) {
                    return {...item, selected: action.payload.switchTo || true}
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
            updatedItems = state.objects.map(item => {
                if (item.id === action.payload) {
                    return item;
                }
                return {...item, selected: false}
            })

            return {...state, objects: updatedItems}

        case MOVE_OBJECT:
            updatedItems = state.objects.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, x: action.payload.x, y: action.payload.y}
                }
                return item;
            })
            return {...state, objects: updatedItems}

        case SET_OBJECT_EDIT_START_POSITION:
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


        case RESIZE_OBJECT:
            updatedItems = state.objects.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        x: action.payload.x,
                        y: action.payload.y,
                        width: action.payload.width,
                        height: action.payload.height
                    }
                }
                return item;
            })
            return {...state, objects: updatedItems}

        case SET_OBJECT_MODE:
            updatedItems = state.objects.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, mode: action.payload.mode}
                }
                return item;
            })
            return {...state, objects: updatedItems}

        case SAVE_EDIT_OBJECT_INIT_STATE:
            let updatedItem = null;
            state.objects.forEach(item => {
                if (item.id === action.payload.id) {
                    updatedItem = item;
                }
            })
            return {...state, editObjectInitState: updatedItem}
        
        case RESET_OBJECT_MODE:
            updatedItems = state.objects.map(item => {
                return {...item, mode: null}
            })
            return {...state, objects: updatedItems}

        case ROTATE_OBJECT:
            updatedItems = state.objects.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, rotate: action.payload.rotate}
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

export const updateEditMode = (mode) => {
    return dispatch => {
        dispatch({
            type: UPDATE_EDIT_MODE,
            mode: mode
        })

    }
}

export const setMouseStartPosition = (x, y) => {
    return dispatch => {
        dispatch({
            type: SET_MOUSE_START_POSITION,
            x: x,
            y: y
        })

    }
}

export const setObjectsSelectState = (ids) => {
    return dispatch => {
        dispatch({
            type: SET_OBJECTS_SELECT_STATE,
            payload: {
                ids: ids,
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

export const setObjectEditStartPosition = (x, y) => {
    return dispatch => {
        dispatch({
            type: SET_OBJECT_EDIT_START_POSITION,
            payload: {
                x: x,
                y: y
            }
        })
    }
}


export const resizeObject = (props) => {
    return dispatch => {
        dispatch({
            type: RESIZE_OBJECT,
            payload: props
        })
    }
}

export const setObjectMode = (id, mode) => {
    return dispatch => {
        dispatch({
            type: SET_OBJECT_MODE,
            payload: {
                id: id,
                mode: mode
            }
        })
    }
}

export const saveEditObjectInitState = (id) => {
    return dispatch => {
        dispatch({
            type: SAVE_EDIT_OBJECT_INIT_STATE,
            payload: {
                id: id
            }
        })
    }
}

export const resetObjectMode = () => {
    return dispatch => {
        dispatch({
            type: RESET_OBJECT_MODE
        })
    }
}

export const rotateObject = ({id, rotate}) => {
    return dispatch => {
        dispatch({
            type: ROTATE_OBJECT,
            payload: {id, rotate}
        })
    }
}