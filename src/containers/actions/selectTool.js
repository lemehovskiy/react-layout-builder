export const getSelectToolPosition = (startPoint, mouse, svgOffset, size) => {
    const x = mouse.x - svgOffset.x > startPoint.x ? startPoint.x : startPoint.x - size.width;
    const y = mouse.y - svgOffset.y > startPoint.y ? startPoint.y : startPoint.y - size.height;

    return {
        x: x,
        y: y
    }
}

export const getSelectToolSize  = (startPoint, mouse, svgOffset) => {

    console.log(mouse);
    const width = Math.abs(mouse.x - svgOffset.x - startPoint.x);
    const height = Math.abs(mouse.y - svgOffset.y - startPoint.y);

    return {
        width: width,
        height: height
    }
}