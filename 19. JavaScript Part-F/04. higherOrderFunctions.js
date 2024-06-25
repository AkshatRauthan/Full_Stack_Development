// Higher Order Functions : These Functions Return Another An Function Based On Its argument.

function isOdd(n){
    if (n%2) console.log(`Yes, ${n} Is An Odd Number.\n`);
    else console.log(`No, ${n} Is Not An Odd Number.\n`);
}

function isEven(n){
    if (!(n%2)) console.log(`Yes, ${n} Is An Even Number.\n`);
    else console.log(`No, ${n} Is Not An Even Number.\n`);
}

function isPrime(n){
    for (let i=2; i<Math.sqrt(n); i++) {
        if (!(n%i)){
            console.log(`No, ${n} Is Not A Prime Number.\n`);
            return;
        }
    }
    console.log(`Yes, ${n} Is A Prime Number.\n`);
}

function number(query, n){
    if (query == "odd"){
        return isOdd(n);
    }
    else if (query == "even"){
        return isEven(n);
    }
    else if (query == "prime"){
        return isPrime(n);
    }
    else console.log("Invalid Query Input.");
}

let n1 = 10, n2 = 17, n3 = 257;

console.log("\n")
number("odd", n1);
number("even", n1);
number("prime", n1);

console.log("\n")
number("odd", n2);
number("even", n2);
number("prime", n2);

console.log("\n")
number("odd", n3);
number("even", n3);
number("prime", n3);