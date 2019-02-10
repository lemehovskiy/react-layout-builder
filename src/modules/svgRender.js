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
    RESIZE_OBJECT,
    SET_OBJECT_MODE,
    SAVE_EDIT_OBJECT_INIT_STATE,
    RESET_OBJECT_MODE,
    ROTATE_OBJECT,
    SET_TEXT_ALIGN,
    SET_VERTICAL_ALIGN
} from './../constants';

function insertItem(array, item) {
    let newArray = array.slice()
    newArray.push(item)
    return newArray
}

function removeItem(array, index) {
    let newArray = array.slice()
    newArray.splice(index, 1)
    return newArray
}

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


const initialState = {};

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
        case SELECT_OBJECTS:
            const objects = state.objects.slice();
            const selectedObjects = state.selectedObjects.slice();

            state.objects.forEach((item, index) => {
                if (action.payload.ids.includes(item.id)) {
                    selectedObjects.push(item);
                    item.splice(index, 1)
                }
            })
            return {...state, objects: objects, selectedObjects: selectedObjects}

        case DESELECT_ALL_OBJECTS:
            return {...state, objects: state.objects.concat(state.selectedObjects), updatedItems, selectedObjects: []}

        case DESELECT_ALL_OBJECTS_EXEPT:
            updatedItems = state.objects.map(item => {
                if (item.id === action.payload) {
                    return item;
                }
                return {...item, selected: false}
            })

            // const updatedSelectedObjects = state.objects.map(item => {
            //     if (!item.id === action.payload) {
            //         return item;
            //     }
            // })

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
            updatedItems = state.selectedObjects.map(item => {
                return {
                    ...item,
                    editStartPositionOffset: {
                        x: action.payload.x - item.x,
                        y: action.payload.y - item.y
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

        case SET_VERTICAL_ALIGN:
            updatedItems = state.selectedObjects.map(item => {
                return {
                    ...item,
                    textProps: {
                        ...item.textProps,
                        verticalAlign: action.payload.value
                    }
                }
            })
            return {...state, selectedObjects: updatedItems}

        case SET_TEXT_ALIGN:
            updatedItems = state.objects.map(item => {
                if (item.selected) {
                    return {
                        ...item,
                        textProps: {
                            ...item.textProps,
                            textAlign: action.payload.value
                        }
                    }
                }
                return item
            })
            return {...state, objects: updatedItems}

        default:
            return state
    }
}