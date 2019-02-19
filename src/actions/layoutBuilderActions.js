import {
    SET_NEW_FIGURE_DRAG_DATA
} from './../constants';


export const setNewFigureDragData = (data) => {
    return dispatch => {
        dispatch({
            type: SET_NEW_FIGURE_DRAG_DATA,
            data: data
        })

    }
}