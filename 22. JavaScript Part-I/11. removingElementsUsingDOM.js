const button1 = document.createElement("button"), button2 = document.createElement("button");
const box = document.querySelector(".box");
button1.innerText = "I'm Button 01,\nRemoving In 6s";
button2.innerText = "I'm Button 02,\nRemoving In 3s";
box.insertAdjacentElement("beforeend",button1);
box.insertAdjacentElement("beforeend",button2);

// removeChild() : Works Like appendChild()
setTimeout(() =>{
    box.removeChild(button1);
}, 6000);

// remove() : Worls Like append() 
setTimeout(() => {
    button2.remove();
}, 3000);