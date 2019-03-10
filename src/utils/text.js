export const getTextAttributes = (object, textState) => {
    let y = 0;

    switch(object.textProps.verticalAlign) {
        case 'top': y = object.y; break;
        case 'middle': y = object.y + object.height / 2 - textState.height / 2; break;
        case 'bottom': y = object.y + object.height - textState.height; break;
        default: y = object.y + object.height / 2 - textState.height / 2;
    }


    return {
        width: object.width,
        height: textState.height,
        overflow: 'visible',
        x: object.x,
        y: y,
    }
}


export const getTextWrapAttributes = (object) => {
    let style = {
        textAlign: object.textProps.textAlign
    };

    return {
        style: style
    }
}

export const getTextEditorAttributes = (object) => {
    let style = {
        textAlign: object.textProps.textAlign,
        width: '100%',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        padding: 0,
        margin: 0
    };

    return {
        style: style
    }
}