import {
    SELECT_OBJECTS,
    ADD_NEW_OBJECT,
    DESELECT_ALL_OBJECTS,
    DESELECT_ALL_OBJECTS_EXEPT,
    MOVE_OBJECT,
    SET_SELECTED_OBJECTS_EDIT_START_POSITION,
    RESIZE_OBJECTS,
    ROTATE_OBJECT,
    SET_TEXT_ALIGN,
    SET_VERTICAL_ALIGN,
    SET_FILL_COLOR,
    SET_STROKE_COLOR,
    SET_STROKE_WIDTH,
    UPDATE_OBJECT_TEXT
} from './../constants';

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

function updateObjectNestedProps(state, ids, payload, nestedProps) {
    let updatedObjectsByHash = {...state.objectsByHash};

    ids.forEach((id) => {
        updatedObjectsByHash[id] = {
            ...updatedObjectsByHash[id],
        [nestedProps]: {
                ...updatedObjectsByHash[id][nestedProps],
                ...payload
            }
        }
    });

    return {...state, objectsByHash: updatedObjectsByHash};
}

const initialState = {};

export default (state = initialState, action) => {
    let updatedObjectsByHash = {};

    switch (action.type) {
        case SELECT_OBJECTS:
            return {...state, selectedObjectsId: state.selectedObjectsId.concat(action.payload.ids)}

        case DESELECT_ALL_OBJECTS:
            return {...state, selectedObjectsId: []}

        case DESELECT_ALL_OBJECTS_EXEPT:
            return {...state, selectedObjectsId: [action.payload]}

        case MOVE_OBJECT:
            return updateObjects(state, action.ids, action.payload);

        case SET_SELECTED_OBJECTS_EDIT_START_POSITION:
            updatedObjectsByHash = {...state.objectsByHash};

            state.selectedObjectsId.forEach((id) => {
                updatedObjectsByHash[id] = {
                    ...updatedObjectsByHash[id],
                    editStartPositionOffset: {
                        x: action.payload.x - updatedObjectsByHash[id].x,
                        y: action.payload.y - updatedObjectsByHash[id].y
                    }
                }
            });

            return {...state, objectsByHash: updatedObjectsByHash}

        case RESIZE_OBJECTS:
            return updateObjects(state, action.ids, action.payload);

        case ROTATE_OBJECT:
            return updateObjects(state, [action.id], action.payload);

        case SET_VERTICAL_ALIGN:
            return updateObjectNestedProps(state, state.selectedObjectsId, action.payload, 'textProps');

        case SET_TEXT_ALIGN:
            return updateObjectNestedProps(state, state.selectedObjectsId, action.payload, 'textProps');

        case SET_FILL_COLOR:
            return updateObjects(state, state.selectedObjectsId, action.payload);

        case SET_STROKE_COLOR:
            return updateObjects(state, state.selectedObjectsId, action.payload);

        case SET_STROKE_WIDTH:
            return updateObjects(state, state.selectedObjectsId, action.payload);

        case ADD_NEW_OBJECT:
            return {
                ...state,
                objectsById: [...state.objectsById, action.id],
                objectsByHash: {
                    ...state.objectsByHash,
                    [action.id]: action.payload.object
                }
            }

        case UPDATE_OBJECT_TEXT:
            return updateObjects(state, [action.id], action.payload);

        default:
            return state
    }
}