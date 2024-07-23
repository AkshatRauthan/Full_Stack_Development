// Creating A New Element Through DOM Manipulation
const newPara = document.createElement("p"), newPara2 = document.createElement("p");
newPara.innerHTML = `<h2>Hello, <br>I'm Peter Pakour. And I'm Spider Man.</h2>`;
newPara2.innerHTML = newPara.innerHTML;
newPara.align = "center";
newPara2.align = "center";


// Appending Newly Created Element Into Our HTML Document :


// 01. obj.appendChild(element) Method : Appends The Element As A Children Of The obj Object.
//     element Will Be Inserted Inside The Element Corresonding To The Object obj After The
//     Last Children Of The Parent Element.
const body = document.querySelector("body");
body.appendChild(newPara);
const button = document.createElement("button");
button.innerText = `Click Me!`;
document.querySelector(".box").appendChild(button);


// 02. obj.append(element) Method : Used To Insert Strings / Texts / Buttons / Elements Inside 
//     Pre-existing Elements In Our Document. At End Of Element.
newPara.append(`\nThis Paragraph Has Been Appended To The Body Tag.`);
document.querySelector("ul ul").append(button);


// 03. obj.prepend(element) Method : Used To Insert Strings / Texts / Buttons / Elements Inside 
//     Pre-existing Elements In Our Document. At Start Of Element.
newPara2.append(`\nThis Paragraph Has Been Prepended To The Body Tag.`);
body.prepend(newPara2);


// 04. obj.insertAdjaventElement(position, element) Method : Insert The Element Accordingly To The Given Position With
// Respect To The Object obj.
let button1 = document.createElement("button"), button2 = document.createElement("button");
let button3 = document.createElement("button"), button4 = document.createElement("button");
button1.innerHTML = "beforeBegin";
button2.innerHTML = "afterBegin";
button3.innerHTML = "beforeEnd";
button4.innerHTML = "afterEnd";
let para = document.querySelectorAll("p");
para = para[1];
para.insertAdjacentElement("beforeBegin", button1);
para.insertAdjacentElement("afterBegin", button2);
para.insertAdjacentElement("beforeEnd", button3);
para.insertAdjacentElement("afterEnd", button4);