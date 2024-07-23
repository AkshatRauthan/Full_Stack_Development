// Returns An HTMLCollection Having Indivisual Objects Of All The Instances Of The Passed Tag In The HTML Document.
// Will Work With Both Uppercase Ad Lowercase.
let paragraph = document.getElementsByTagName("P");

console.dir(paragraph);

for (paraObj of paragraph){
    paraObj.align = "center";
}

let flag = true;

let hideParas = setInterval(() => {
    if (flag){
        for (paraObj of paragraph){
            paraObj.hidden = true;
        }
        flag = false;
    }
    else {
        for (paraObj of paragraph){
            paraObj.hidden = false;
        }
        flag = true;
    }
}, 3000);