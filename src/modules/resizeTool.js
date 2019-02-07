export const SET_RESIZE_DIRECTION = 'resizeTool/SET_RESIZE_DIRECTION';

import {
    SET_RESIZE_DIRECTION
} from './../constants';


const initialState = {
    resizeDirection: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_RESIZE_DIRECTION:
            return {
                ...state,
                resizeDirection: action.payload.direction
            }

        default:
            return state
    }
}


export const setResizeDirection = (direction) => {
    return dispatch => {
        dispatch({
            type: SET_RESIZE_DIRECTION,
            payload: {
                direction: direction
            }
        })
    }
}