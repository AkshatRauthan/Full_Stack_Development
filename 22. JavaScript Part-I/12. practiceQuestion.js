const body = document.querySelector("body");
body.style.fontSize = "x-large";
body.style.backgroundColor = "black"

// Part a :
const para = document.createElement("p");
para.align = "center";
para.innerText = `Hey I'm Red!`;
para.style.color = "red";
body.append(para);

// Part b :
const h3 = document.createElement("h3");
h3.align = "center"
h3.innerText = `Hey I'm Blue H3!`;
h3.style.color = "skyblue";
body.append(h3);

// Part c :
const div = document.createElement("div");
div.style.color = "wheat"
div.align = "center";
const childHeading = document.createElement("h1");
childHeading.innerText = `I'm In A Div`;
div.append(childHeading);
const childPara = document.createElement("h2");
childPara.innerText = `Me Too`;
div.append(childPara);
body.append(div);