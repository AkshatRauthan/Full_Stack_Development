// Check If All The Elements Are Mulpiples Of 10 In An Array.

function check(arr){
    return arr.every((el) => el%10 == 0);
}

arr1 = [2, 4, 6, 8, 10, 15, 20];
arr2 = [10, 20, 30, 40 , 50, 100];

console.log(`\n\nThe First Array Is : ${arr1}\n`);
if (check(arr1)) console.log("Yes, The Above Array Contains Only Multiples Of 10\n\n");
else console.log("No, The Above Array Do Not Contain Only Multiples Of 10.\n\n");

console.log(`\n\nThe Second Array Is : ${arr2}\n`);
if (check(arr2)) console.log("Yes, The Above Array Contains Only Multiples Of 10\n\n");
else console.log("No, The Above Array Do Not Contain Only Multiples Of 10.\n\n");