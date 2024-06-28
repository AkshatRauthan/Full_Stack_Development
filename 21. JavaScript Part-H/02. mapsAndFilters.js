//                                    Maps Function
// Map Function Is Used To Perform A Function On All The Elements Of An Array And Save The Results In A New Array.
// The Size Of The New Array Is Equal To The Size Of The Original Array.

let num = [1,2,3,4,5,6];
let double = num.map((el) => el*2);

console.log("\nMap Function\n", num);
console.log("\n", double,"\n");



//                                  Filter Function
// Filter Function Is Used To Filter Out Elements From An Array Based On Certain Conditions And Store Then In A New Array.

num = [6,8,2,13,14,8];
let ans = num.filter((el) => el%2 == 0);

console.log("Filter Function\n", num);
console.log("\n", ans,"\n");