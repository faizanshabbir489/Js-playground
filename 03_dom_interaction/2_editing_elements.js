// editing_elements.js

/*
 * Editing Elements in the DOM
 * JavaScript allows us to modify HTML elements, including their text, attributes, and styles.
 * This file demonstrates essential methods for editing elements.
 */

// 1. Changing Inner Text Content
// The `textContent` property sets or retrieves the text within an element, including nested elements.
let heading = document.getElementById("heading");
heading.textContent = "Updated Heading Text";
console.log("Updated text content:", heading.textContent);  // Outputs "Updated Heading Text"

// 2. Changing HTML Content
// The `innerHTML` property allows us to set or retrieve HTML content within an element.
let container = document.getElementById("container");
container.innerHTML = "<p>New content inside container</p>";
console.log("Updated HTML content:", container.innerHTML);  // Outputs the new HTML inside the container

// 3. Changing Element Attributes
// The `setAttribute` method sets a specified attribute and its value on an element.
// Example: setting a `src` attribute for an image.
let image = document.getElementById("image");
image.setAttribute("src", "new-image.jpg");
console.log("Updated image source:", image.getAttribute("src"));  // Outputs 'new-image.jpg'

// Alternative: Directly updating attributes using properties (if available).
image.alt = "Updated alt text";
console.log("Updated alt attribute:", image.alt);  // Outputs 'Updated alt text'

// 4. Adding and Removing CSS Classes
// Use `classList` to add, remove, toggle, or check if a class exists on an element.
let box = document.querySelector(".box");

// Adding a class
box.classList.add("highlight");
console.log("Classes after adding 'highlight':", box.className);  // Outputs class list including 'highlight'

// Removing a class
box.classList.remove("highlight");
console.log("Classes after removing 'highlight':", box.className);  // Outputs class list without 'highlight'

// Toggling a class
box.classList.toggle("active");  // Adds 'active' if not present; removes it if present
console.log("Classes after toggling 'active':", box.className);

// 5. Changing Inline CSS Styles
// The `style` property allows direct editing of an element’s inline CSS styles.
let button = document.querySelector("button");
button.style.backgroundColor = "blue";
button.style.color = "white";
console.log("Button styles:", button.style.cssText);  // Outputs inline styles applied to the button

// 6. Removing an Attribute
// The `removeAttribute` method removes a specific attribute from an element.
let link = document.querySelector("a");
link.removeAttribute("target");
console.log("Attributes after removing 'target':", link.attributes);  // Outputs attributes list without 'target'

