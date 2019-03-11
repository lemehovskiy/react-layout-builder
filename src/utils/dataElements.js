export const getElement = (id, dataName) => {
   return document.getElementById(id).querySelector("[data-layout-builder-component='"+ dataName +"']");
}

export const getTargetAttributeName = (e) => {
    return e.target.getAttribute('data-layout-builder-component');
}