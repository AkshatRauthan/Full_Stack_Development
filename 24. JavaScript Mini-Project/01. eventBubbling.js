const box = document.querySelectorAll("div");
const list = document.querySelectorAll("ul");
const item = document.querySelectorAll("li");

for (obj of box){
    obj.style.backgroundColor = `pink`;
    obj.style.height = `20vh`;
    obj.style.width = `22vw`;
    obj.style.margin = "auto";
}
for (obj of list){
    obj.style.backgroundColor = `skyblue`;
}
for (obj of item){
    obj.style.padding = "3px";
    obj.style.backgroundColor = `greenyellow`;
    obj.style.textAlign = `center`
}
for (obj of document.querySelectorAll("h1")){
    obj.style.textAlign = `center`;
    obj.style.marginTop = `10vh`;
}

for (obj of box){
    obj.addEventListener("click", function(event){
        console.log(`\nDiv Was Clicked`);
    });
}
for (obj of list){
    obj.addEventListener("click", function(event){
        if (this.classList[0] == "without-bubbling") event.stopPropagation();
        console.log(`\nUnordered List Was Clicked.`);
    });
}
for (obj of item){
    obj.addEventListener("click", function(event){
        if (this.classList[0] == "without-bubbling") event.stopPropagation();
        console.log(`\nA List Item Was Clicked.`);
    });
}