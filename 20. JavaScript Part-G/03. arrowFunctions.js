// Arrow Functions Are Not Complete Functions. These Are Functions Which We Are Assignong To A Varable
// Name.

const sum = (a, b) => {return a+b}
// Or
const sum1 = (a, b) => (a + b);

// Parenthesis Optional In-case Of Single Argument.
const sqrt = a => {return a**0.5}
// Or
const sqrt1 = a => (a**0.5);

// Directly Returns The Value in The Above Cases. BUt Parenthesis Used In-place Of Curly Braces.

const greet = () => console.log(`\nGood Morning\n`);
greet();

let a = 256, b = 512;
console.log(`The Sum Of ${a} And ${b} Is : ${sum1(a, b)}\n`);
console.log(`The Square Root Of ${a} Is : ${sqrt1(a)}\n`);
console.log(`The Square Root Of ${b} Is : ${sqrt1(b)}\n`);