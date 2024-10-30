/* In js we have different type of data type:
1.String
2.Number
3.Boolean
4.null
5.undefined
6.object
7.array
8.symbol
*/

//String:A string represents text and is created by enclosing characters in quotes (single, double, or backticks).

let greeting="hello to all";
let msg=`hi to "all of you" `;//we can use single " or double"" inside ``;
console.log(greeting);
console.log(msg);

//Number:A number represents numeric values and includes both integers and floating-point numbers.

let age = 25;            // Integer
let price = 19.99;       // Floating-point number
let negative = -5;       // Negative number
console.log(age + price); // Output: 44.99 (we added age and price)

//bollean :A boolean represents a logical value and can only be true or false.

let isLoggedIn = true;
let hasAccess = false;
console.log(isLoggedIn);  // Output: true
console.log(hasAccess);   // Output: false

//Null: null represents an intentional absence of any object value (that variable has no value ).

let result = null;
console.log(result); // Output: null

//undefined: undefined means a variable has been declared but has not yet been assigned a value.

let score;
console.log(score); // Output: undefined

/*object:  An object is a complex data structure that stores collections of data and more complex entities.
Objects are created using curly braces {}, and they contain key-value pairs
They have key:vale pairs*/

let person = {
    name: "Alice",
    age: 30,
    isStudent: false
};
console.log(person.name);   // Accessing property: Output: Alice
console.log(person.age);    // Output: 30

/*An array is a special type of object in JavaScript that holds a list of items in an ordered collection.
Arrays are created using square brackets [] and can hold values of any type (strings, numbers, objects, etc.).
Each item in an array has an index, starting from 0 for the first item.*/
let mixedArray = ["Alice", 25, true];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);

/*A symbol is a unique and immutable value, often used to create unique property keys for objects.
Symbols are created by calling Symbol().*/

let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log(sym1 === sym2); // Output: false (symbols are always unique)