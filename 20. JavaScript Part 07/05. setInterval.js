// Used To Execute A Functin Multiple Times With Time Delays.
console.log(("\n"));

let id1 = setInterval(() => {
    console.log(`Hello! I'm Akshat\n`)
}, 500);

setTimeout(() => {
    clearInterval(id1);
}, 5500);
