//                              Spread Method
// Used To Pass All The Indivisual Values Present In Iterables (Arrays, Strings) In An Another
// Function Or Method.

let arr = [5,4,1,2,3,7,8,9,0];

// Normal Syntax
let min1 = Math.min(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8]);

// Syntax Using Spread Method.
let min = Math.min(...arr);

console.log("\n\nThe Given Array Is :",...arr);
console.log(`\nThe Minimum Element In The Array Is : ${min}\n\n`);

let str = "Akshat_Rauthan";
console.log("All The Characters of The String Are :",...str,"\n\n");