// This Is Used To Refer To The Object On Which We Are Adding The Event Listner.
const button = document.querySelector("button");

// In Case Of Arrow Function : this Points To Window
// button.addEventListener("click", () => {
//     console.dir(this);
// });

// In Case Of Normal Function : this Points To Button
button.addEventListener("click", function (){
    console.dir(this);
    this.style.backgroundColor = "skyblue";
});

// Applying Random Background Color To Elements Upon Hovering Mouse Poiner Over Them.
let randomNumber = () => Math.floor(Math.random() * 255);

const elements = document.querySelectorAll("body *");
for (obj of elements){
    obj.addEventListener("mouseenter", function () {
        console.log(`\nYour Mouse Is Pointing To The ${this.tagName} Element.`);
        let r = randomNumber(), g = randomNumber(), b = randomNumber();
        this.style.backgroundColor = `rgba(${r},${g},${b},0.6)`;
    })
}