// Asynchronous Functions Are Used To Handle Operations That Take Time To Complete 
// Without Blocking The Execution Of The Rest Of Our Code.
// They Are Defined Using Async Keyword And Always Return A Promise.

async function greet(){
    if (Math.random() > 0.4) return `Hello`;
    else throw "Can't Greet Now";
}

greet()
.then((result) => {
    console.log(`\n${result}\n`);
})
.catch((error) => {
    console.log(`\n${error}\n`);
})