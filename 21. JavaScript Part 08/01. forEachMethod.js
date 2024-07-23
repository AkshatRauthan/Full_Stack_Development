// forEach Method
let arr = [1, 2, 3, 4, 5];

function print(el){
    console.log(el);
}

console.log("\n");
arr.forEach(print);
console.log("\n");

arr.forEach(function(el) {console.log(el);})