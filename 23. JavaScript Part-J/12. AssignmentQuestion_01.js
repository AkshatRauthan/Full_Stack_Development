const body = document.querySelector("body");
const button = document.createElement("button");

button.innerText = "Click To Turn Me Green";
body.append(button);

body.style.textAlign = "center";
body.style.backgroundColor = "gray"
button.style.fontSize = "30px";
button.style.marginTop = "40vh";
button.style.padding = "5px 15px";
button.style.fontFamily = "times new roman";
button.style.border = "none";
button.style.boxShadow = "5px 5px 10px black";
button.style.borderRadius = "10px";
button.style.color = "black";

let flag = true;
button.addEventListener("click", function(){
    if (flag){
        button.style.backgroundColor = "green";
        button.innerText = `Click To Turn Me White`;
        button.style.color = "cyan";
        flag--;
    }
    else {
        button.style.backgroundColor = "white";
        button.innerText = `Click To Turn Me Green`;
        button.style.color = "black";
        flag++;
    }
});