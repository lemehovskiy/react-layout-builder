import {
    SET_LAYOUT_BUILDER_MODE
} from './../constants';


export const setLayoutBuilderMode = (mode) => {
    return dispatch => {
        dispatch({
            type: SET_LAYOUT_BUILDER_MODE,
            mode: mode
        })

    }
}