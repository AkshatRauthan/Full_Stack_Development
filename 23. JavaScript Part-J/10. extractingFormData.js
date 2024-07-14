const form = document.querySelector("form");
const input = document.querySelectorAll("input");

form.addEventListener("submit", function(event){
    console.dir(form);
    event.preventDefault();
    for (values of input){
        console.log(`${values.name} : ${values.value}`)
    }
});

// form.elements Will Store Objects Of All Firm Elements.