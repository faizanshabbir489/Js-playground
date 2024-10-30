// Hoisting in JavaScript
// Hoisting means JavaScript moves declarations to the top of the scope during compilation.

// With "var", the variable is hoisted and initialized as undefined.
console.log(hvar); // Output: undefined (no error, because var is hoisted)
var hvar = 10;

// With "let" and "const", they are hoisted but not initialized, causing a ReferenceError if accessed too early.
console.log(hlet); // ReferenceError: Cannot access 'hlet' before initialization
let hlet = 20;

console.log(hconst); // ReferenceError: Cannot access 'hconst' before initialization
const hconst = 10;
//var variables are hoisted and initialized as undefined, making them accessible before the line of declaration (but with an undefined value).
//let and const variables are hoisted too, but they’re not initialized until their line in the code is reached, causing a ReferenceError if accessed too early.