// The ClassList Property Is Used To Retrieve, Update Or Add Classnames To The Correponding Element.

// Toogle : Add The Classname If It Is Not Present Otherwise Remove It From Classlist.

const h1 = document.querySelector("h1");
const box = document.querySelector(".box"); 

function addStyling(){
    // Setting Styling By Adding Classnemes
    setTimeout(() => {
        h1.classList.add("center");
    }, 1000);
    setTimeout(() => {
        h1.classList.add("green");
    }, 2000);
    setTimeout(() => {
        h1.classList.toggle("background");
        box.classList.toggle("background");
    }, 3000);
    setTimeout(() => {
        h1.classList.toggle("underline");
    }, 4000);
}

function removeStyling(){
    // Removing Styling By Removing Classnames
    setTimeout(() => {
        h1.classList.remove("underline");
    }, 5000);
    setTimeout(() => {
        h1.classList.remove("background");
        box.classList.toggle("background");
    }, 6000);
    setTimeout(() => {
        h1.classList.toggle("green");
    }, 7000);
    setTimeout(() => {
        h1.classList.toggle("center");
    }, 8000);
}

console.log(box)
setInterval(() => {
    addStyling();
    removeStyling();
},9000);