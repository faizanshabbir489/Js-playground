/*
IIFE (Immediately Invoked Function Expression)
----------------------------------------------
An IIFE is a function that runs immediately after it is defined. It's a great way to create a scope of its own.
Syntax:
(function() {
    // code to execute
})();
*/

// Basic IIFE
(function() {
    console.log("This IIFE runs immediately!");
})();

// IIFE with Arrow Function Syntax (ES6+)
(() => {
    console.log("This IIFE with an arrow function runs right away!");
})();

// IIFE with Parameters
(function(greeting, name) {
    console.log(`${greeting}, ${name}!`);
})("Hello", "World");

// Explanation: 
// - By wrapping the function in parentheses (function() { ... }) and then adding `()` at the end, we define and invoke it immediately.

// Why Use an IIFE?
// 1. Avoid polluting the global scope
// 2. Create private variables
// 3. Useful for modules or one-time initialization code

// Example 1: Using IIFE to Create Private Variables
const counter = (function() {
    let count = 0; // private variable
    return {
        increment: function() { count++; return count; },
        decrement: function() { count--; return count; },
        getValue: function() { return count; }
    };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getValue()); // 1

// Explanation:
// - The `count` variable is private to the IIFE and can't be accessed directly from outside. 
// - The returned object exposes only specific methods for interaction.

// Example 2: Using IIFE for One-Time Initialization
(function() {
    console.log("Initializing settings...");
    const settings = { theme: "dark mode", language: "en" };
    // Any one-time setup can go here
})();

// Example 3: Creating a Module with an IIFE
const mathModule = (function() {
    const pi = 3.14159; // private variable
    return {
        areaOfCircle: function(radius) { return pi * radius * radius; },
        circumferenceOfCircle: function(radius) { return 2 * pi * radius; }
    };
})();

console.log(mathModule.areaOfCircle(5)); // 78.53975
console.log(mathModule.circumferenceOfCircle(5)); // 31.4159

// Explanation:
// - `pi` is a private constant inside the IIFE.
// - The methods `areaOfCircle` and `circumferenceOfCircle` can use it, but it’s not accessible outside.

