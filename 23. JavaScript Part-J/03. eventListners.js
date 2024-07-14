const button = document.querySelectorAll("button");
const button1 = button[0], button2 = button[1], button3 = button[2], button4 = button[3];
console.log(`\nAll The Buttons Are :`);
console.dir(button);

button1.addEventListener("click",() => {
    console.log(`\nButton 1 Was Clicked.`);
    alert(`Button 1 Was Clicked`);
})

button2.addEventListener("click", () => {
    console.log(`\nHello! How Are You!`);
    alert(`Hello! How Are You!`);
})

button3.addEventListener("click", () => {
    console.log(`\nI Like It!`);
    alert(`I Like It!`);
})

button4.addEventListener("click", () => {
    console.log(`\nThank You!`);
    alert(`Thank You!`);
})

for (let i=0; i<button.length; i++){
    button[i].addEventListener("mouseenter", () => {
        console.log(`\nYou Are Pointing At The "${button[i].innerText}" Button.`)
    })
}