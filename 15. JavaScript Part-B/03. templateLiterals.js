let pencilPrice = 10;
let eraserPrice = 5;

// Method 01 : => Addition took place first because of highest precedence of paranthesis.
console.log("The Total Price Is : ₹"+(pencilPrice + eraserPrice));
console.log("\n");

// Method 02 : => String concatenation took place even for numbers.
console.log("The Total Price Is : ₹"+pencilPrice + eraserPrice);
console.log("\n");

// Method 03 : => Using template literals with backtick sign.
console.log(`The Total Price Is : ₹${pencilPrice + eraserPrice}`)
console.log("\n");