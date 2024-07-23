// The Precedence Order Of Mathematical Operators In Javascript Is :

// A) ()     => Paranthesis
// B) **     => Power Operator
// C) * / %     
// D) + -       

let a = ( 2 + 1 ) * 3 % 3 / 1 + 2 ** 2 % 4 + 1 * 6 / 2;

// Step 01 => 3 * 3 % 3 / 1 + 2 ** 2 % 4 + 1 * 6 / 2

// Step 02 => 3 * 3 % 3 / 1 + 4 % 4 + 1 * 6 / 2

// Step 03 => 9 % 3 / 1 + 0 + 1 * 6 / 2

// Step 04 => 0 / 1 + 0 + 3

// Ans => 3

console.log(a);
