const body = document.querySelector("body");
const heading = document.createElement("h2");
const userName = document.createElement("input");

body.style.textAlign = "center";
body.style.backgroundColor = 'gray';

heading.style.fontSize = "30px";
heading.style.fontFamily = "times new roman";

userName.style.fontSize = "20px";
userName.style.fontFamily = "times new roman";
userName.style.fontWeight = "650";
userName.style.textAlign = "center";
userName.style.marginTop = "40vh";
userName.style.border = "none";
userName.style.borderRadius = "10px";
userName.style.padding = "10px 0px";
userName.style.width = "18vw";

const condition = `(event.keyCode>64 && event.keyCode<91)||(event.keyCode>96 && event.keyCode<123)||(event.keyCode==32)`
userName.setAttribute("onkeypress",`return ${condition}`);
userName.setAttribute("placeholder", "Enter Your Name :")

userName.addEventListener("input", function(){
    heading.innerText = userName.value;
    heading.style.marginTop = "30vh";
    userName.style.margin = "0";
    if (userName.value == "" || userName.value == " ") userName.style.marginTop = "10vh";
});

body.append(heading);
body.append(userName);