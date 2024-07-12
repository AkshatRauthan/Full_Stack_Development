// obj.getAttribute(attr) => returns the value of the attribute "attr" for the corresponding object.
// obj.setAttribute(attr, val) => Sets value of attrib attribute to val for element corresponding to passed object

let img = document.querySelector("img");
let id = img.getAttribute("id");

console.log(`\nThe Id Of The Main Image Is : ${id} \n`);

img.setAttribute("id","spiderMan");

let newId = img.getAttribute("id");
console.log(`\nThe New Id Of The Main Image Is : ${newId} \n`);

// Remember Upon Changing The Classname Or Id Of An Element The Styling Applied To The Element
// Through The Id / Classname Will Got Removed.

let className = img.getAttribute("class");
console.log(`\nThe Class-name of The Main Image Is : ${className}\n`);
img.setAttribute("class", "mainImg");
console.log(`\nThe Class-name of The Main Image Is : ${img.className}\n`);