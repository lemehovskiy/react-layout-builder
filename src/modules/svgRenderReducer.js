import {
    SELECT_OBJECTS,
    ADD_NEW_OBJECT,
    DESELECT_ALL_OBJECTS,
    DESELECT_ALL_OBJECTS_EXEPT,
    MOVE_OBJECT,
    SET_OBJECT_EDIT_START_POSITION,
    RESIZE_OBJECTS,
    ROTATE_OBJECT,
    SET_TEXT_ALIGN,
    SET_VERTICAL_ALIGN,
    SET_FILL_COLOR,
    SET_STROKE_COLOR,
    SET_STROKE_WIDTH
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

function updateObjects(state, ids, payload) {
    let updatedObjectsByHash = {...state.objectsByHash};

    ids.forEach((id) => {
        updatedObjectsByHash[id] = {
            ...updatedObjectsByHash[id],
            ...payload
        }
    });

    return {...state, objectsByHash: updatedObjectsByHash};
}


const initialState = {};

export default (state = initialState, action) => {
    let updatedItems = [];
    let updatedObjectsByHash = {};

    switch (action.type) {
        case SELECT_OBJECTS:
            return {...state, selectedObjectsId: state.selectedObjectsId.concat(action.payload.ids)}

        case DESELECT_ALL_OBJECTS:
            return {...state, selectedObjectsId: []}

        case DESELECT_ALL_OBJECTS_EXEPT:
            return {...state, selectedObjectsId: [action.payload]}
        case MOVE_OBJECT:
            return updateObjects(state, action.payload.ids, action.payload);

        case SET_OBJECT_EDIT_START_POSITION:
            updatedObjectsByHash = {...state.objectsByHash};

            state.selectedObjectsId.forEach((id) => {
                updatedObjectsByHash[id].editStartPositionOffset = {
                    x: action.payload.x - updatedObjectsByHash[id].x,
                    y: action.payload.y - updatedObjectsByHash[id].y
                }
            });

            return {...state, objectsByHash: updatedObjectsByHash}

        case RESIZE_OBJECTS:
            return updateObjects(state, action.payload.ids, action.payload);

        case ROTATE_OBJECT:
            updatedItems = updateItemInArray(state.objects, action.payload.id, object => {
                return updateObject(object, {rotate: action.payload.rotate})
            })
            return updateObject(state, {objects: updatedItems})

        case SET_VERTICAL_ALIGN:
            updatedItems = state.objects.map(item => {
                if (state.selectedObjectsId.includes(item.id)) {
                    return {
                        ...item,
                        textProps: {
                            ...item.textProps,
                            verticalAlign: action.payload.value
                        }
                    }
                }
                return item
            })
            return {...state, objects: updatedItems}

        case SET_TEXT_ALIGN:
            updatedItems = state.objects.map(item => {
                if (state.selectedObjectsId.includes(item.id)) {
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

        case SET_FILL_COLOR:
            updatedItems = state.objects.map(item => {
                if (state.selectedObjectsId.includes(item.id)) {
                    let color = action.payload.value;
                    return {
                        ...item,
                        fill: color === null ? 'none' : `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`

                    }
                }
                return item
            })
            return {...state, objects: updatedItems}

        case SET_STROKE_COLOR:
            updatedItems = state.objects.map(item => {
                if (state.selectedObjectsId.includes(item.id)) {
                    let color = action.payload.value;
                    return {
                        ...item,
                        stroke: color === null ? 'none' : `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`

                    }
                }
                return item
            })
            return {...state, objects: updatedItems}

        case SET_STROKE_WIDTH:
            updatedItems = state.objects.map(item => {
                if (state.selectedObjectsId.includes(item.id)) {
                    return {
                        ...item,
                        strokeWidth: action.payload.value

                    }
                }
                return item
            })
            return {...state, objects: updatedItems}

        case ADD_NEW_OBJECT:
            return {...state, objects: [...state.objects, action.payload.object]}

        default:
            return state
    }
}