// Copying An Array Using Spread Keyword.
let arr = [1,2,3,4,5,6,7,8,9,10];
let copy = [...arr];
if (arr.values === copy.values) console.log(`\n\nThe Array Has Been Copied Succesfully.\n`);
console.log("The New Copied Array Is :",...arr,"\n");


// Copying 2 Arrays Into A New One.
let odd = [1n,3n,5n,7n,9n], even = [2n,4n,6n,8n,10n];
arr = [...odd, ...even];
console.log("\nThe New Array With Both Odd And Even Numbers :",...arr,"\n");


// Copying A String's Indivisual Characters Into An Array
let chars = [..."Alan_Walker"];
console.log("\nThe Character Array Is :",...chars,"\n\n");