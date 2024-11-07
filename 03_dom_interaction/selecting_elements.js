// selecting_elements.js

/*
 Selecting Elements in the DOM
 JavaScript offers various methods to select HTML elements for manipulation.
 This file covers essential selection methods.
*/

// 1. Selecting an Element by ID
// The `getElementById` method selects a single element with a specific ID.
// Returns the element with the specified ID or null if not found.
let header = document.getElementById("header");
console.log("Selected by ID:", header);  // Outputs the element with ID 'header'.

// 2. Selecting Elements by Class Name
// The `getElementsByClassName` method selects all elements with a specific class name.
// Returns an HTMLCollection, which is a collection of elements, not an array.
let boxes = document.getElementsByClassName("box");
console.log("Selected by Class Name:", boxes);  // Outputs a collection of elements with class 'box'.

// 3. Selecting Elements by Tag Name
// The `getElementsByTagName` method selects all elements with a specific tag name.
// Returns an HTMLCollection of all matching elements.
let paragraphs = document.getElementsByTagName("p");
console.log("Selected by Tag Name:", paragraphs);  // Outputs all <p> elements in the document.

// 4. Selecting the First Element by CSS Selector
// The `querySelector` method selects the first element that matches a specified CSS selector.
// Accepts any valid CSS selector string.
let firstBox = document.querySelector(".box");
console.log("First element matching .box:", firstBox);  // Outputs the first element with class 'box'.

// 5. Selecting All Elements by CSS Selector
// The `querySelectorAll` method selects all elements that match a specified CSS selector.
// Returns a NodeList, which is similar to an array and allows for iteration.
let allBoxes = document.querySelectorAll(".box");
console.log("All elements matching .box:", allBoxes);  // Outputs a NodeList of elements with class 'box'.

// 6. Accessing Elements Within a Parent Element
// You can also use these methods to find elements within a specific parent element.
// Example: Selecting a parent element, then finding child elements inside it.
let container = document.querySelector(".container");
let containerItems = container.getElementsByTagName("div");
console.log("Divs inside .container:", containerItems);  // Outputs all <div> elements within the container.

