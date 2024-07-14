// Method 02 For Event Handling : Using Object Properties
// Limitations : One Property Can Hold Only One Function At A Time.
// So We Can't Multiple Diffrent Tasks From The Same Event.

const button = document.querySelectorAll("button");
const button1 = button[0], button2 = button[1], button3 = button[2], button4 = button[3];
console.log(`\nAll The Buttons Are :`);
console.dir(button);

function click(){
    console.log(`\nThe Button Number 1 Was Clicked`);
    alert(`The Button Number 1 Was Clicked`);
}
function greet(){
    console.log(`\nHello! How Are You.`);
    alert(`Hello! How Are You.`);
}
function like(){
    console.log(`\nI Like It.`);
    alert(`I Like It.`);
}
function thank(){
    console.log(`\nThank You!`);
    alert(`Thank You!`);
}

button1.onclick = click;
button2.onclick = greet;
button3.onclick = like;
button4.onclick = thank;

for (let i=0; i<button.length; i++){
    button[i].onmouseenter = () => 
        console.log(`\nYou Are Pointing At The "${button[i].innerText}" Button.`);
}