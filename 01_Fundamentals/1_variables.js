// Variable Declarations in JavaScript: "var", "let", and "const"

// "var" is function-scoped, and can be redeclared within the same scope.
var age = 10; // function-scoped, can be redeclared
// If we declare it inside a function, it is accessible only within that function.
var age = 20; // Example of redeclaration (overwrites the previous value)

// "let" is block-scoped, meaning it is accessible only within the block it is declared in.
// It can be reassigned but not redeclared in the same scope.
let height = 20;

// "const" is also block-scoped, but it cannot be reassigned or redeclared in the same scope.
const li = 30;
//Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.