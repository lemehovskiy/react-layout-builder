import {
    SET_MOUSE_START_POSITION,
    SET_NEW_FIGURE_DRAG_DATA
} from './../constants';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MOUSE_START_POSITION:
            return {
                ...state,
                mouseStartPosition: {
                    x: action.x,
                    y: action.y
                }
            }

        case SET_NEW_FIGURE_DRAG_DATA:
            return {
                ...state,
                newFigureDragData: action.data
            }
        default:
            return state
    }
}