const body = document.querySelector("body");
body.style.textAlign = "center";
console.dir(body);
body.children[0].style.margin = "25vh";
for (obj of body.children[0].children){
    obj.style.margin = "5px";
    obj.style.fontSize = "20px";
    obj.style.textAlign = "center";
    obj.style.width = "20vw";
}

body.children[0].addEventListener("submit", function(event){
    event.preventDefault();
});

const form = document.querySelectorAll("input");

// The Change Event Is Trigerred When There Is A Diffrence Between The Initial And Final State
// Of The Element. Final State Refers To When The Element Is Again Inactive.
// Works Only On Input, Textarea Or Select Elements
for (obj of form){
    obj.addEventListener("change", function(){
        console.log(`\nChange Event Triggered For ${this.name}`);
        console.log(`Final Value : ${this.value}`);
    });
}


// The Input Event Is Fired Simultanoeously Every Single Time The Value Of An Input, 
// TextArea Or Select Element is Changed. For Ex. => Adding 'a' in a input tag.
for (obj of form){
    obj.addEventListener("input", function(){
        console.log(`\Input Event Triggered For ${this.name}`);
        console.log(`Final Value : ${this.value}`);
    });
}