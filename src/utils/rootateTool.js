//TODO make rotate more user friendly
export const getObjectRotateValue = ({mousePosition, mouseStartPosition, object}) => {
    let angle = Math.atan2(
        mouseStartPosition.x + (object.width || 0) / 2 - mousePosition.x,
        mouseStartPosition.y + (object.height || 0) / 2 - mousePosition.y
    );

    let asDegree = angle * 180 / Math.PI;

    return (asDegree - 45) * -1;
}