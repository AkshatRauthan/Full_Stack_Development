// Square And Sum The Array Elements Using The Arrow Function And Then Find Average Of Elements.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("\n\nThe Initial Array Is :",...arr);

arr = arr.map((el) => el * el);
console.log("\n\nThe Array After Squaring The Elements Is :",...arr);

let sum = arr.reduce((sum, el) => sum += el), avg = sum / arr.length;
console.log(`\n\nThe Sum Of The Square Of All The Elements Is : ${sum}`);

console.log(`\n\nThe Average Of The Array Is : ${sum/arr.length}\n\n`);