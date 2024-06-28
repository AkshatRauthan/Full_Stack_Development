//                                   Reduce Method
// This Method Returns A Single Value By Repetitive Operations On All The Elements Along With
// The Previous Result Obtained.

let arr = [2,4,6,8,10,12];
console.log(`\nThe Given Array Is : ${arr}\n`);

let sum = arr.reduce((sum, el) => sum += el);
let prod = arr.reduce((prod, el) => prod *= el);

console.log(`The Sum Of The Given Array Is : ${sum}\n`);
console.log(`The Product Of The Given Array Is : ${prod}\n`);