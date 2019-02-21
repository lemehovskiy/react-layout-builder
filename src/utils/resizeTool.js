//TODO fix bug with resize when object rotated

function getObjectResizeValuesSouth(mouse, objectInitState, mouseStartPosition) {
    let returnVal = {};
    let progress = mouse.y - mouseStartPosition.y;
    let changeValue = objectInitState.height + progress;
    returnVal.y = changeValue > 0 ? objectInitState.y : objectInitState.y - Math.abs(changeValue);
    returnVal.height = Math.abs(changeValue);

    return returnVal;
}

function getObjectResizeValuesNorth(mouse, objectInitState, mouseStartPosition) {
    let returnVal = {};
    let progress = mouse.y - mouseStartPosition.y;
    let changeValue = objectInitState.height - progress;
    returnVal.y = changeValue > 0 ? objectInitState.y - (changeValue - objectInitState.height) : objectInitState.y + objectInitState.height;
    returnVal.height = Math.abs(changeValue);

    return returnVal;
}

function getObjectResizeValuesEast(mouse, objectInitState, mouseStartPosition) {
    let returnVal = {};

    let progress = mouse.x - mouseStartPosition.x;
    let changeValue = objectInitState.width + progress;
    returnVal.x = changeValue < 0 ? objectInitState.x + changeValue : objectInitState.x;
    returnVal.width = Math.abs(changeValue);

    return returnVal;
}

function getObjectResizeValuesWest(mouse, objectInitState, mouseStartPosition) {
    let returnVal = {};

    let progress = mouse.x - mouseStartPosition.x;
    let changeValue = objectInitState.width - progress;
    returnVal.x = changeValue > 0 ? objectInitState.x + progress : objectInitState.x + objectInitState.width;
    returnVal.width = Math.abs(changeValue);

    return returnVal;
}

export const getObjectResizeValues = (mouse, direction, objectInitState, mouseStartPosition, object) => {
    let updatedObject = object;

    switch (direction) {
        case 's':
            updatedObject = Object.assign(updatedObject, getObjectResizeValuesSouth(mouse, objectInitState, mouseStartPosition));
            break;
        case 'n':
            updatedObject = Object.assign(updatedObject, getObjectResizeValuesNorth(mouse, objectInitState, mouseStartPosition));
            break;
        case 'e':
            updatedObject = Object.assign(updatedObject, getObjectResizeValuesEast(mouse, objectInitState, mouseStartPosition));
            break;
        case 'w':
            updatedObject = Object.assign(updatedObject, getObjectResizeValuesWest(mouse, objectInitState, mouseStartPosition));
            break;
        case 'ne':
            updatedObject = Object.assign(updatedObject, getObjectResizeValuesNorth(mouse, objectInitState, mouseStartPosition));
            updatedObject = Object.assign(updatedObject, getObjectResizeValuesEast(mouse, objectInitState, mouseStartPosition));
            break;
        case 'se':
            updatedObject = Object.assign(updatedObject, getObjectResizeValuesSouth(mouse, objectInitState, mouseStartPosition));
            updatedObject = Object.assign(updatedObject, getObjectResizeValuesEast(mouse, objectInitState, mouseStartPosition));
            break;
        case 'sw':
            updatedObject = Object.assign(updatedObject, getObjectResizeValuesSouth(mouse, objectInitState, mouseStartPosition));
            updatedObject = Object.assign(updatedObject, getObjectResizeValuesWest(mouse, objectInitState, mouseStartPosition));
            break;
        case 'nw':
            updatedObject = Object.assign(updatedObject, getObjectResizeValuesNorth(mouse, objectInitState, mouseStartPosition));
            updatedObject = Object.assign(updatedObject, getObjectResizeValuesWest(mouse, objectInitState, mouseStartPosition));
            break;
        default:
            break;
    }

    return updatedObject;
}