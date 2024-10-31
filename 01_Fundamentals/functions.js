/*
  JavaScript Functions

  Functions are blocks of code designed to perform specific tasks.
  They help in organizing code, improving readability, reusability, and modularity.
  
  Types of functions:
  1. Function Declaration
  2. Function Expression
  3. Arrow Function
  4. Immediately Invoked Function Expression (IIFE)
*/

// 1. Function Declaration
// This is the most common way to declare a function using the "function" keyword.

function greet(name) {
    return `Hello, ${name}!`;
  }
  
console.log(greet("Alice"));  // Output: Hello, Alice!

// 2. Function Expression
// Functions can also be defined as expressions and stored in variables.
// These functions are anonymous (no name) and are assigned directly to a variable.

const sayGoodbye = function(name) {
    return `Goodbye, ${name}!`;
  };
  
console.log(sayGoodbye("Alice"));  // Output: Goodbye, Alice!

// 3. Arrow Function
// Introduced in ES6, arrow functions are a shorter syntax for function expressions.
// They do not have their own 'this' binding, which makes them useful for certain situations.
const add = (a, b) => a + b;
console.log(add(5, 3));  // Output: 8

// If there's only one parameter, parentheses can be omitted.
const double = n => n * 2;
console.log(double(4));  // Output: 8

// 4. Immediately Invoked Function Expression (IIFE)
// IIFE is a function that runs immediately after it's defined.
// This is useful for creating a private scope to avoid polluting the global namespace.
(function() {
    const message = "This is an IIFE!";
    console.log(message);
})();  // Output: This is an IIFE!

/*
  Anonymous Functions
  Anonymous functions have no name and are often used as arguments for higher-order functions.
  For example, you can pass an anonymous function as an argument to an array method like `map`.
*/

const numbers = [1, 2, 3];
const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled);  // Output: [2, 4, 6]

/*
  Higher-Order Functions
  A higher-order function is a function that accepts another function as an argument or returns a function.
  Examples: map, filter, reduce
*/

const filterEven = numbers.filter(num => num % 2 === 0);
console.log(filterEven);  // Output: [2]

/*
  Function Scope and Hoisting
  
  Variables defined within a function are in local scope and cannot be accessed outside the function.
  Functions in JavaScript are also hoisted, meaning they can be called before they are defined.
*/

console.log(sayHello()); // Output: Hello, World!

function sayHello() {
  return "Hello, World!";
}

/*
  Arrow Functions vs. Regular Functions
  
  - Arrow functions do not have their own 'this' context; instead, they inherit 'this' from the parent scope.
  - They cannot be used as constructors.
  - They are typically shorter in syntax and are ideal for callbacks and simple functions.
*/

const person = {
    name: "Bob",
    regularFunction: function() {
      console.log(`Hello from regular function, ${this.name}`);
    },
    arrowFunction: () => {
      console.log(`Hello from arrow function, ${this.name}`); // 'this' does not refer to 'person'
    }
  };
  
  person.regularFunction(); // Output: Hello from regular function, Bob
  person.arrowFunction();   // Output: Hello from arrow function, undefined
  
  /*
    Summary:
    - Functions are essential for organizing and reusing code.
    - Different types include declarations, expressions, arrow functions, and IIFEs.
    - Functions in JavaScript are flexible due to features like default parameters, rest parameters, and higher-order capabilities.
  */
  