import {
    SET_MOUSE_START_POSITION,
    SET_LAYOUT_BUILDER_MODE
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

        case SET_LAYOUT_BUILDER_MODE:
            return {
                ...state,
                mode: action.mode
            }
        default:
            return state
    }
}