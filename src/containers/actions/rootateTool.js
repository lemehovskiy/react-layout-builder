//TODO make rotate more user friendly
export const getObjectRotateValue = ({mouse, mouseStartPosition, object}) => {
    let angle = Math.atan2(
        mouseStartPosition.x + (object.width || 0) / 2 - mouse.x,
        mouseStartPosition.y + (object.height || 0) / 2 - mouse.y
    );

    let asDegree = angle * 180 / Math.PI;

    return (asDegree - 45) * -1;
}