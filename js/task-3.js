'use strict';
function getElementWidth(content, padding, border) {
    // const getContent = parseFloat(content);
    // const getPadding = parseFloat(padding)*2;
    // const getBorder = parseFloat(border)*2;
    // const totalWidth =getContent + getPadding + getBorder;
    // return (totalWidth);
    return parseFloat(content) + (parseFloat(padding)*2) + (parseFloat (border)*2);

    
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px")); 