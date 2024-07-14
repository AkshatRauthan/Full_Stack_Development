const form = document.querySelector("form");

// preventDefault() Method Stops All The Default Actions Assigned To The Element.

form.addEventListener("submit", function(event){
    event.preventDefault();
    alert(`The Form Is Submitted.`);
}); 