const body = document.querySelector("body");
body.style.backgroundColor = "lightblue";
const circle = document.createElement("div");

circle.style.height = "40vh";
circle.style.width = "40vh";
circle.style.border = "1px solid black";
circle.style.backgroundColor = `magenta`;
circle.style.borderRadius = "50%";
circle.style.position = "absolute";
circle.style.left = "40%";
circle.style.top = "30%";

body.append(circle);

let moveTop = 0, moveRight = 0;
function move(){
    circle.style.transform = `translate(${moveRight}px,${moveTop}px)`;
}
let a=[10,29];

body.addEventListener("keydown", function(event){
    if (event.key == "ArrowUp" || ["U","u"].includes(event.key)){
        moveTop -= 25;
        console.log(`\n\nThe Circle Is Moved Up.`);
    }
    else if (event.key == "ArrowDown" || ["D","d"].includes(event.key)){
        moveTop += 25;
        console.log(`\n\nThe Circle Is Moved Down.`);
    }
    else if (event.key == "ArrowLeft" || ["L","l"].includes(event.key)){
        moveRight -= 25;
        console.log(`\n\nThe Circle Is Moved Left.`);
    }
    else if (event.key == "ArrowRight" || ["R","r"].includes(event.key)){
        moveRight += 25;
        console.log(`\n\nThe Circle Is Moved Right.`);
    }
    else{
        console.log(`\n\nOops! Invalid Key Pressed.`);
        console.log(`Please Use Arrow Or L,R,U,D Keys For Moving The Circle.`);
        return;
    }
    move();
});