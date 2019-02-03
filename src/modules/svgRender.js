export const UPDATE_HANDLER_OBJECT_INDEX = 'svgRender/HANDLER_OBJECT_INDEX';
export const UPDATE_MOUSE_COORDINATES = 'svgRender/UPDATE_MOUSE_COORDINATES';
export const UPDATE_EDIT_MODE = 'svgRender/UPDATE_EDIT_MODE';
export const SET_EDIT_START_POINT = 'svgRender/SET_EDIT_START_POINT';
export const UPDATE_SELECTED_OBJECTS = 'svgRender/UPDATE_SELECTED_OBJECTS';


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
        case UPDATE_SELECTED_OBJECTS:

            updatedItems = state.objects.map(item => {
                if (item.id === action.payload) {
                    return {...item, selected: !item.selected}
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

export const updateSelectedObjects = (id) => {
    return dispatch => {
        dispatch({
            type: UPDATE_SELECTED_OBJECTS,
            payload: id
        })

    }
}