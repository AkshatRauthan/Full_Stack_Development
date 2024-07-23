// Function to take average of 3 numbers.

function average(a=0, b=0, c=0){
    return (a+b+c)/3;
}
a = 11, b = 19, c = 15;
ans = average(a, b, c);
console.log(`Average Of ${a}, ${b} And ${c} : ${ans}`);