const para = document.querySelector("p");
para.addEventListener("click", () => {
    console.log(`\nParagraph Clicked!`);
});

const box = document.querySelector(".box");
box.addEventListener("mouseenter", () => {
    console.log(`\nYou Are Pointing At The Box Div.`);
});