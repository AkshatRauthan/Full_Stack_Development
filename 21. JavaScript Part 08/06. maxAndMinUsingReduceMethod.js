let arr = [1, 8, 9, 12, 24, 45, 57, 123, 321, 456, 628];
console.log(`\n\nThe Given Array Is : ${arr}\n`);

let max = arr.reduce((max, el) => {
    if (max < el) return el;
    else return max;
});

let min = arr.reduce((min, el) => {
    if (min > el) return el;
    else return min;
});

console.log(`The Maximum Element In The Array Is : ${max}\n`);
console.log(`The Minimum Element In The Array Is : ${min}\n\n`);
