//                          Some Function
// The Some Function Returns True Or False Based On The Function Passed In The Function.
// True Is Returned If Any Element Satisfy The Given Condition Else False Is Returned.
// Simply Returns OR Operation Of The Condition For All The Indivisual Elements.

let arr1 = [1,3,5,9,13,17];
let arr2 = [2,4,6,8,10,12];

console.log("\nThe First Array Is As Follows : \n",arr1);
if (arr1.some(el => el%2 == 0)) console.log("\nYes, The Array Contains Atleast One Even Number.\n");
else console.log("\nNo, The Array Do Not Contain Any Even Number.\n");

console.log("\n\nThe Second Array Is As Follows : \n",arr2);
if (arr2.some(el => el%2 == 0)) console.log("\nYes, The Array Contains Atleast One Even Number.\n");
else console.log("\nNo, The Array Do Not Contain Any Even Number.\n");
