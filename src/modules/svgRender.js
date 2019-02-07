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
    ROTATE_OBJECT
} from './../constants';


function updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues)
}

function updateItemInArray(array, itemId, updateItemCallback) {
    const updatedItems = array.map(item => {
        if (item.id !== itemId) {
            // Since we only want to update one item, preserve all others as they are now
            return item
        }

        // Use the provided callback to create an updated item
        const updatedItem = updateItemCallback(item)
        return updatedItem
    })

    return updatedItems
}


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
            updatedItems = updateItemInArray(state.objects, action.payload.id, object => {
                return updateObject(object, {
                    x: action.payload.x,
                    y: action.payload.y,
                    width: action.payload.width,
                    height: action.payload.height
                })
            })
            return updateObject(state, {objects: updatedItems})

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
            updatedItems = updateItemInArray(state.objects, action.payload.id, object => {
                return updateObject(object, {rotate: action.payload.rotate})
            })
            return updateObject(state, {objects: updatedItems})
        default:
            return state
    }
}