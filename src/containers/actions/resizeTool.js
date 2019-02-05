export const getObjectResizeValues = (mouse, direction, objectInitState, mouseStartPosition, object) => {
    let updatedObject = {
        x: object.x,
        y: object.y,
        width: object.width,
        height: object.height
    }
    let progress = null,
        changeValue = null;

    switch (direction) {
        case 's':
            progress = mouse.y - mouseStartPosition.y;
            changeValue = objectInitState.height + progress;
            updatedObject.y = changeValue > 0 ? objectInitState.y : objectInitState.y - Math.abs(changeValue);
            updatedObject.height = Math.abs(changeValue);
            break;
        case 'n':
            progress = mouse.y - mouseStartPosition.y;
            changeValue = objectInitState.height - progress;
            updatedObject.y = changeValue > 0 ? objectInitState.y - (changeValue - objectInitState.height) : objectInitState.y + objectInitState.height;
            updatedObject.height = Math.abs(changeValue);
            break;
        case 'e':
            progress = mouse.x - mouseStartPosition.x;
            changeValue = objectInitState.width + progress;
            updatedObject.x = changeValue < 0 ? objectInitState.x + changeValue : objectInitState.x;
            updatedObject.width = Math.abs(changeValue);
            break;
        case 'w':
            progress = mouse.x - mouseStartPosition.x;
            changeValue = objectInitState.width - progress;
            updatedObject.x = changeValue > 0 ? objectInitState.x + progress : objectInitState.x + objectInitState.width;
            updatedObject.width = Math.abs(changeValue);
            break;
    }

    return updatedObject;
}