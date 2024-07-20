// Selecting All The Elements Needed
const taskInput = document.querySelector("input");
const addTask = document.querySelector(".add-task");
const clearInput = document.querySelector(".clear-input");
const box = document.querySelector(".box");

// Creating Necessary Inline Buttons And Unordered List Elements.
const taskList = document.createElement("ul"); 
const buttonControles = document.createElement("span");
const deleteButton = document.createElement("button");
const resetButton = document.createElement("button");
deleteButton.innerText = "Delete Item";
resetButton.innerText = "Reset List";
buttonControles.setAttribute("class","button-controles");
buttonControles.append(resetButton);
buttonControles.append(deleteButton);

// Clear Input Event
clearInput.addEventListener(`click`, function(){
    taskInput.value = "";
});

// Adding A List Item
addTask.addEventListener("click",function(){
    if (taskInput.value == "" || taskInput.value == " ") return;
    box.append(taskList);
    box.append(buttonControles);
    const task = document.createElement("li");
    task.innerText = taskInput.value;
    taskList.append(task);
    taskInput.value = "";
});

let selected = [];


//                  Event Delegation :
// Adding Event Listner To Directly Unordered List.
// And Performing All The Actions Only When List Item Is Clicked.
// So That We Do Need To Add Action Listner For Every Newly Created li Elements.
taskList.addEventListener("click", function(event){
    let target = event.target;
    if (target.nodeName == "LI"){
        if (selected.includes(target)){
            target.style.backgroundColor = "lightgray";
            selected.splice(selected.lastIndexOf(target));
        }
        else{
            selected.push(target);
            target.style.backgroundColor = "lightblue";
        }
    }
});


// Deleting Selected List Items
deleteButton.addEventListener("click", function(){
    for (obj of selected){
        obj.remove();
    }
    if (taskList.children.length == 0){
        buttonControles.remove();
        taskList.remove();
    }
});

// Clearing All The List Items And Bottom Button Controles
resetButton.addEventListener("click", function() {
    for (obj of document.querySelectorAll("li")){
        obj.remove();
    }
    buttonControles.remove();
    taskList.remove();
})