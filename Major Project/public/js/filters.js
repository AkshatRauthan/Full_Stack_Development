const filters = document.getElementsByClassName("filter")
console.dir(filters)

for (a of filters){
    a.addEventListener("click", () => {
        console.log(`${a.innerText} Clicked`);
    })
}