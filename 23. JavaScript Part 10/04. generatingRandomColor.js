const body = document.querySelector("body");
body.style.textAlign = "center";

const heading = document.createElement("h1");
heading.innerText = `Generate a random color`;
heading.style.width = "75vw";
heading.style.height = "10vh";
heading.style.margin = "5rem auto 0.5rem auto";
body.append(heading);

const button = document.createElement("button");
button.style.marginBottom = "1rem"
button.style.fontSize = "medium";
button.innerText = "Generate Color";
body.append(button);

const div = document.createElement("div");
div.innerText = `This is your new color`;
body.append(div);
div.style.border = "1px solid black";
div.style.width = `65vw`;
div.style.height = `30vh`;
div.style.margin = "auto" 
div.style.padding = "5px";
div.style.fontSize = "large";

let randomNumber = () => Math.floor(Math.random() * 255);
button.addEventListener("click",() => {
    let r = randomNumber(), g = randomNumber(), b = randomNumber();
    div.style.backgroundColor = `rgb(${r},${g},${b})`;
    heading.innerText = `rgb(${r},${g},${b})`;
    heading.style.color = `rgb(${r},${g},${b})`;
    button.style.backgroundColor = `rgba(${r},${g},${b},0.4)`;
    heading.style.backgroundColor = button.style.backgroundColor;
})