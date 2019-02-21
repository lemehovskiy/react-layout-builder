Object.byString = function(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}

export const getEqualPropertyValueFromSelectedObjects = (objects, key) => {
    let values = [];

    if (objects.length > 0){
        objects.forEach((object => {
            values.push(Object.byString(object, key));
        }))
    }

    values.every( (val, i, arr) => val === arr[0] )   // true

    return values.every( (val, i, arr) => val === arr[0]) ? values[0] : false;
}

export const isInt = (value) => {
    return !isNaN(value) &&
        parseInt(Number(value)) === value &&
        !isNaN(parseInt(value, 10));
}

export const generateID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}