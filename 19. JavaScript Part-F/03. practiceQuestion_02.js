// Function to print table of a number.
function multiplicationTable(n){
    for (let i=n; i<=n*10; i+=n) console.log(`${n} X ${i/n} = ${i}`);
}

let n = 27;
console.log(`\nThe Multiplication Table Of ${n} Is : `);
multiplicationTable(n);