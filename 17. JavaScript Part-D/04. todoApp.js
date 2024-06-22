let todo = [];
let choice;

while (true){
    choice = prompt("Please Enter Your Choice : ");

    if (choice.toLowerCase() == "list"){
        console.log("----------------------");
        for (task of todo) console.log(task);
        console.log("----------------------\n\n");
    }

    else if (choice.toLowerCase() == "add"){
        console.log("----------------------");
        todo.push(prompt("Please Enter The New Task : "))
        console.log("Task added Succesfully");
        console.log("----------------------\n\n");
    }

    else if (choice.toLowerCase() == "delete"){
        task = prompt("Please Enter The Task To Delete : ");
        console.log("----------------------");
        idx = todo.indexOf(task);
        if (idx != -1){
            todo.splice(idx, 1);
            console.log("Task Deleted Successfully...");
        }
        else console.log("The Requested Task Is Missing...\nPlease Try Again");
        console.log("----------------------\n\n");
    }

    else if (choice.toLowerCase() == "quit") break;

    else console.log("Invalid Input...\nPlease Try Again....\n");
}