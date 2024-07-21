// Promise Object Represemts The Eventual Completion Or Failure Of An Async Operation
// And Its Resulting Value.

// States Of Promise
// resolved Or fulfilled => Final State In Case Of Success
// pending   => When The Promise Is Under Execution
// rejected  => Final State In Case Of Failure

// .then() Method => Used To Specify What To Do In Case Of Fulfilled Promise.
// .catch() Method => Used To Specify What To Do In Case Of Rejected Promise.

console.log(`\n`);
function SaveToDb(data, type){
    return new Promise((resolve, reject) => {
        let internetSpeed = 1 + Math.floor(Math.random() * 10);
        if (internetSpeed > 4){
            resolve("Success : Data Was Saved");
        }
        else reject(`Saving ${type} Failed Due To Poor Connection`);
    })
}

SaveToDb("Name : Akshat Rauthan", "Name")
    .then(() => {
        console.log(`01. Name Saved Succesfully`);
        return SaveToDb("Age : 20", `Age`);
    })
    .then(() => {
        console.log(`02. Age Was Saved Successfully`);
        return SaveToDb(`Gender : Male`, `Gender`);
    })
    .then(() => {
        console.log(`03. Gender Saved Succesfully`);
        console.log(`\n`);
    })
    .catch((statement) => {
        console.log(statement);
        console.log(`\n`);
    });

