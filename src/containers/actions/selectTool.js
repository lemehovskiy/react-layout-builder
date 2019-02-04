export const getSelectToolPosition = (startPoint, mouse, svgOffset, size) => {
    const x = mouse.x - svgOffset.x > startPoint.x ? startPoint.x : startPoint.x - size.width;
    const y = mouse.y - svgOffset.y > startPoint.y ? startPoint.y : startPoint.y - size.height;

    return {
        x: x,
        y: y
    }
}

export const getSelectToolSize = (startPoint, mouse, svgOffset) => {
    const width = Math.abs(mouse.x - svgOffset.x - startPoint.x);
    const height = Math.abs(mouse.y - svgOffset.y - startPoint.y);

    return {
        width: width,
        height: height
    }
}


export const checkRectRectCollision = (rect1, rect2) => {
    return rect1.x + rect1.width >= rect2.x &&
        rect1.x <= rect2.x + rect2.width &&
        rect1.y + rect1.height >= rect2.y &&
        rect1.y <= rect2.y + rect2.height;
}