// arr.push() : Add element to the end
// arr.unsfift() : Add element to the start
// arr.pop() : Delete element from end and return it.
// arr.shift() : Delete element from the start and return it.
// arr.indexof() : Returns The Index Of the first occurance of Element If Present in the array.
// arr.include() : Returns if the element is present in the array or not.
// arr.concat(Secondary) : Appends Secondary array after into arr in a newly created array.
// arr.reverse() : Reverse tha array arr in plece.
// arr.slice(s_idx, e_idx) : To get a portion of the array.
// arr.splice(s_idx, delete_count, items[]) : Used To delete or replace elements inplace
// in the array. Returns an array of deleted elements.

// arr.sort() : 

let arr = [1,2,3,4,5,6,7,8,9];

console.log(`\nThe Initial Array : ${arr}\n`);

arr.push(10);
console.log(`The Array After Pushing ${arr[arr.length-1]} : ${arr}\n`);

arr.unshift(0);
console.log(`The Array After Unshifting ${arr[0]} : ${arr}\n`);

let a = arr.pop();
console.log(`The Array After Popping : ${arr}\n`);

a = arr.shift();
console.log(`The Array After Shifting : ${arr}\n`);

console.log(`teh Index of 3 is : ${arr.indexOf(3)}\n`);

console.log(`Presence Of 10 in array : ${arr.includes(10)}\n`);

let newArr = [10,11,12];
console.log(`The New Array Is : ${newArr}\n`);
arr = arr.concat(newArr);
console.log(`The Array After Concatenation : ${arr}\n`);

arr.reverse();
console.log(`The Array Arfter Reversing : ${arr}\n`);

console.log(`The Array From 3 to 7th Index : ${arr.slice(3, 8)}\n`);
console.log(`The Last 4 Elements Of The Array : ${arr.slice(-4)}\n`);

colours = ["red", "yellow", "green", "blue", "orange"];
console.log(`The Initial Array : ${colours}\n`);
colours.splice(1, 3);
console.log(`The Array After colour.splice(1, 3) : ${colours}\n`);
colours.splice(1, 0, ["yellow", "green", "blue"]);
console.log(`The Array After Again Inserting Them : ${colours}\n`);

arr = [6,3,4,2,1,8,9,0,5,7];
arr.sort();
char = ["v", "f", "r", "a", "l"];
char.sort();

console.log(`The Array arr After Sorting : ${arr}\n`);
console.log(`The Array char After Sorting : ${char}\n`);