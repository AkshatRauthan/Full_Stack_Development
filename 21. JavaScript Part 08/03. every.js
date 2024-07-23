//                          Every Function
// The Every Function Returns True Or False Based On The Function Passed In The Function.
// True Is Returned If All The Elements Satisfy The Condition Else False Is Returned.
// Simply Returns AND Operation Of The Condition For All The Indivisual Elements.

let arr1 = [1,2,3,4,5,6];
let arr2 = [2,4,6,8,10,12];

console.log("\nThe First Array Is As Follows : \n",arr1);
if (arr1.every(el => el%2 == 0)) console.log("Yes, The Array Contains Only Even Numbers.");
else console.log("\nNo, The Array Do Not Contain Only Even Numbers");

console.log("\n\nThe Second Array Is As Follows : \n",arr2);
if (arr2.every(el => el%2 == 0)) console.log("\nYes, The Array Contains Only Even Numbers.\n");
else console.log("\nNo, The Array Do Not Contain Only Even Numbers\n");
