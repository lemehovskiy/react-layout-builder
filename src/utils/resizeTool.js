//TODO fix bug with resize when object rotated

const compose = (...funcs) => value =>
    funcs.reduceRight((acc, func) => func(acc), value)

const getObjectResizeValuesSouth = (props) => {
    let updatedObject = {...props.object};
    let progress = props.mouse.y - props.mouseStartPosition.y;
    let changeValue = props.objectInitState.height + progress;
    updatedObject.y = changeValue > 0 ? props.objectInitState.y : props.objectInitState.y - Math.abs(changeValue);
    updatedObject.height = Math.abs(changeValue);

    return {...props, object: updatedObject};
}

const getObjectResizeValuesNorth = (props) => {
    let updatedObject = {...props.object};
    let progress = props.mouse.y - props.mouseStartPosition.y;
    let changeValue = props.objectInitState.height - progress;
    updatedObject.y = changeValue > 0 ? props.objectInitState.y - (changeValue - props.objectInitState.height) : props.objectInitState.y + props.objectInitState.height;
    updatedObject.height = Math.abs(changeValue);

    return {...props, object: updatedObject};
}

const getObjectResizeValuesEast = (props) => {
    let updatedObject = {...props.object};

    let progress = props.mouse.x - props.mouseStartPosition.x;
    let changeValue = props.objectInitState.width + progress;
    updatedObject.x = changeValue < 0 ? props.objectInitState.x + changeValue : props.objectInitState.x;
    updatedObject.width = Math.abs(changeValue);

    return {...props, object: updatedObject};
}

const getObjectResizeValuesWest = (props) => {
    let updatedObject = {...props.object};

    let progress = props.mouse.x - props.mouseStartPosition.x;
    let changeValue = props.objectInitState.width - progress;
    updatedObject.x = changeValue > 0 ? props.objectInitState.x + progress : props.objectInitState.x + props.objectInitState.width;
    updatedObject.width = Math.abs(changeValue);

    return {...props, object: updatedObject};
}

const getObjectResizeValuesNorthEast = compose(getObjectResizeValuesNorth, getObjectResizeValuesEast);
const getObjectResizeValuesSouthEast = compose(getObjectResizeValuesSouth, getObjectResizeValuesEast);
const getObjectResizeValueSouthWest = compose(getObjectResizeValuesSouth, getObjectResizeValuesWest);
const getObjectResizeValuesNorthWest = compose(getObjectResizeValuesNorth, getObjectResizeValuesWest);

export const getObjectResizeValues = (mouse, direction, objectInitState, mouseStartPosition, object) => {
    let updatedObject = {...object};

    switch (direction) {
        case 's':
            updatedObject = getObjectResizeValuesSouth({mouse, objectInitState, mouseStartPosition, object}).object;
            break;
        case 'n':
            updatedObject = getObjectResizeValuesNorth({mouse, objectInitState, mouseStartPosition, object}).object;
            break;
        case 'e':
            updatedObject = getObjectResizeValuesEast({mouse, objectInitState, mouseStartPosition, object}).object;
            break;
        case 'w':
            updatedObject = getObjectResizeValuesWest({mouse, objectInitState, mouseStartPosition, object}).object;
            break;
        case 'ne':
            updatedObject = getObjectResizeValuesNorthEast({mouse, objectInitState, mouseStartPosition, object}).object;
            break;
        case 'se':
            updatedObject = getObjectResizeValuesSouthEast({mouse, objectInitState, mouseStartPosition, object}).object;
            break;
        case 'sw':
            updatedObject = getObjectResizeValueSouthWest({mouse, objectInitState, mouseStartPosition, object}).object;
            break;
        case 'nw':
            updatedObject = getObjectResizeValuesNorthWest({mouse, objectInitState, mouseStartPosition, object}).object;
            break;
        default:
            break;
    }

    return updatedObject;
}

export const getResizeObjectDotsConfig = (object, resizeDirection) => {
    const config = [
        {
            name: 'nw',
            x: object.x,
            y: object.y
        },
        {
            name: 'n',
            x: object.x + object.width / 2,
            y: object.y
        },
        {
            name: 'ne',
            x: object.x + object.width,
            y: object.y
        },
        {
            name: 'w',
            x: object.x,
            y: object.y + object.height / 2
        },
        {
            name: 'e',
            x: object.x + object.width,
            y: object.y + object.height / 2
        },
        {
            name: 'sw',
            x: object.x,
            y: object.y + object.height
        },
        {
            name: 's',
            x: object.x + object.width / 2,
            y: object.y + object.height
        },
        {
            name: 'se',
            x: object.x + object.width,
            y: object.y + object.height
        }
    ]

    return resizeDirection !== null ? config.filter(direction => direction.name === resizeDirection) : config
}