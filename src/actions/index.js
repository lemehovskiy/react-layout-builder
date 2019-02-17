import {
    UPDATE_HANDLER_OBJECT_INDEX,
    UPDATE_EDIT_MODE,
    SET_MOUSE_START_POSITION,
    SELECT_OBJECTS,
    DESELECT_OBJECTS,
    DESELECT_ALL_OBJECTS,
    DESELECT_ALL_OBJECTS_EXEPT,
    MOVE_OBJECT,
    SET_OBJECT_EDIT_START_POSITION,
    RESIZE_OBJECTS,
    SET_OBJECT_MODE,
    SAVE_EDIT_OBJECT_INIT_STATE,
    RESET_OBJECT_MODE,
    ROTATE_OBJECT,
    SET_TEXT_ALIGN,
    SET_VERTICAL_ALIGN,
    SET_FILL_COLOR,
    SET_STROKE_COLOR
} from './../constants';


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

export const selectObjects = (ids) => {
    return dispatch => {
        dispatch({
            type: SELECT_OBJECTS,
            payload: {ids}
        })
    }
}

export const deselectObjects = (ids) => {
    return dispatch => {
        dispatch({
            type: DESELECT_OBJECTS,
            payload: {ids}

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


export const moveObject = (payload) => {
    return dispatch => {
        dispatch({
            type: MOVE_OBJECT,
            payload: payload
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


export const resizeObjects = (props) => {
    return dispatch => {
        dispatch({
            type: RESIZE_OBJECTS,
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

export const setTextAlign = (value) => {
    console.log(111);
    return dispatch => {
        dispatch({
            type: SET_TEXT_ALIGN,
            payload: {value}
        })
    }
}

export const setVerticalAlign = (value) => {
    return dispatch => {
        dispatch({
            type: SET_VERTICAL_ALIGN,
            payload: {value}
        })
    }
}

export const setFillColor = (value) => {
    return dispatch => {
        dispatch({
            type: SET_FILL_COLOR,
            payload: {value}
        })
    }
}

export const setStrokeColor = (value) => {
    console.log(value);
    return dispatch => {
        dispatch({
            type: SET_STROKE_COLOR,
            payload: {value}
        })
    }
}