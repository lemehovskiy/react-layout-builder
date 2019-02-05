export const getTransformMatrix = ({rotate, x, y, width, height}) => {
    if (rotate) {
        let centerX = width / 2 + x;
        let centerY = height / 2 + y;
        return `rotate(${rotate} ${centerX} ${centerY})`;
    }
}

export const getObjectAttributes = (object) => {
    console.log(object);
    return {
        transform: getTransformMatrix(object)
    };
}