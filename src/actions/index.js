import {
    UPDATE_HANDLER_OBJECT_INDEX,
    UPDATE_EDIT_MODE,
    SET_MOUSE_START_POSITION,
    SET_OBJECTS_SELECT_STATE,
    DESELECT_ALL_OBJECTS,
    DESELECT_ALL_OBJECTS_EXEPT,
    MOVE_OBJECT,
    SET_OBJECT_EDIT_START_POSITION,
    RESIZE_OBJECT,
    SET_OBJECT_MODE,
    SAVE_EDIT_OBJECT_INIT_STATE,
    RESET_OBJECT_MODE,
    ROTATE_OBJECT,
    SET_TEXT_ALIGN,
    SET_VERTICAL_ALIGN
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

export const setTextAlign = (value) => {
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