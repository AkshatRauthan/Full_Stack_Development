let para = document.querySelector("p");

// Property 01 : innerText
// Shows The Visible Text Container In A Node.
// Only The Plain Text Got Selected.
console.log("\nInnerText : \n",para.innerText);

 
// Property 02 : textContent
// Shows The Full Text.
// Shows The Text With All The Hidden Parts, Spaces, Alignment And Endline Characters.
console.log("\nText-Contents : \n",para.textContent);


// Property 03 : innerHTML
// Shows Full Markup
// Displays The Whole HTML Tag Along With All The Applied Properties.
console.log("\nInner-HTML :\n",para.innerHTML);


// Manipulating Elements Using These Properties.
const text = para.innerHTML;
let flag = true;
setInterval(() => {
    if (flag){
        para.innerHTML = `<b>Hello I'm Peter Parker,<br>And I'm Spider Man.</b>`;
        para.align = "center";
        document.querySelector("h2").align = "center";
        flag = false;
    }
    else {
        para.innerHTML = text;
        para.align = "left";
        document.querySelector("h2").align = "left";
        flag = "true";
    }
}, 2500);