/*
sort.js

Overview:
The `sort()` method in JavaScript is used to sort elements of an array. 
By default, it converts elements to strings and sorts them in ascending order based on Unicode values, which may cause unexpected results for numbers. 
With a custom compare function, we can sort elements in numeric order, descending order, or even sort complex data like objects by their properties.
Syntax:
array.sort([compareFunction])

Parameters:
- compareFunction (optional): A function that defines the sort order. Without it, elements are sorted as strings.
*/

// 1. Sorting Strings Alphabetically (Default Behavior)
// Sorts alphabetically based on Unicode values when no compare function is provided.

let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log("Sorted strings:", fruits); // Output: ["apple", "banana", "cherry"]

// 2. Sorting Numbers in Ascending Order
// JavaScript `sort()` treats numbers as strings by default, so we need a compare function to sort them correctly.

let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b); // Ascending order
console.log("Sorted numbers (ascending):", numbers); // Output: [1, 5, 10, 25, 40, 100]

// 3. Sorting Numbers in Descending Order
// A compare function can reverse the order by returning `b - a`.

let numbersDesc = [40, 100, 1, 5, 25, 10];
numbersDesc.sort((a, b) => b - a); // Descending order
console.log("Sorted numbers (descending):", numbersDesc); // Output: [100, 40, 25, 10, 5, 1]

// 4. Sorting Arrays with Mixed Elements    
// Note that `sort()` treats elements as strings by default, so mixed data types may not sort as expected.

let mixedArray = ["100", "5", "25", "banana", "apple"];
mixedArray.sort();
console.log("Sorted mixed array (string sorting):", mixedArray); 
// Output: ["100", "25", "5", "apple", "banana"]

// 5. Sorting Objects by a Specific Property
// Sorting an array of objects by a numeric or string property using a compare function.

let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
];
people.sort((a, b) => a.age - b.age); // Sort by age in ascending order
console.log("Sorted people by age:", people);
// Output: [{ name: "Charlie", age: 20 }, { name: "Alice", age: 25 }, { name: "Bob", age: 30 }]


// 6. Sorting Strings in Case-Insensitive Order
// Use `localeCompare` to sort strings without case sensitivity.

let caseInsensitiveArray = ["banana", "Apple", "cherry"];
caseInsensitiveArray.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
console.log("Sorted case-insensitively:", caseInsensitiveArray); // Output: ["Apple", "banana", "cherry"]

/* 
  Key Points:
  - `sort()` mutates the original array.
  - When sorting numbers or objects, always provide a compare function.
  - Sorting is generally efficient but may vary based on array size and complexity of the compare function.
*/