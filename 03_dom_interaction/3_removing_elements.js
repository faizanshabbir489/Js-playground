// removing_elements.js

/*
 * Removing Elements from the DOM
 * JavaScript provides several ways to remove elements from the DOM, either entirely or by removing their content.
 * This file demonstrates the most common methods.
 */

// 1. Removing a Specific Element
// The `remove()` method removes an element directly from the DOM.
// It is straightforward but is only available on the element itself.
let elementToRemove = document.getElementById("removeMe");
elementToRemove.remove();
console.log("Element removed:", elementToRemove);  // Outputs: <div id="removeMe">...</div> (but no longer in DOM)

// 2. Removing a Child Node
// The `removeChild()` method is used on a parent element to remove a specified child node.
let parentElement = document.getElementById("parent");
let childToRemove = document.getElementById("child");

parentElement.removeChild(childToRemove);
console.log("Child removed:", childToRemove);  // Outputs the removed child element

// 3. Clearing All Child Nodes
// The `innerHTML` property can be set to an empty string to remove all child elements of an element.
// This is useful for clearing out an element entirely.
let contentContainer = document.getElementById("contentContainer");
contentContainer.innerHTML = "";
console.log("Content container after clearing:", contentContainer);  // Outputs: <div id="contentContainer"></div>

// 4. Removing Elements Using `parentNode`
// You can access an element’s `parentNode` and use `removeChild` to delete it.
// This is useful if you only have a reference to the child element.
let itemToDelete = document.getElementById("item");
itemToDelete.parentNode.removeChild(itemToDelete);
console.log("Item removed using parentNode:", itemToDelete);  // Outputs: <div id="item">...</div> (but no longer in DOM)

// 5. Using `replaceChild` to Replace an Element (Optional)
// The `replaceChild()` method can remove an element by replacing it with another.
// Although this method isn't strictly for removal, it replaces the specified child with a new node.
let newElement = document.createElement("div");
newElement.textContent = "I am a replacement element";

let elementToReplace = document.getElementById("toBeReplaced");
elementToReplace.parentNode.replaceChild(newElement, elementToReplace);
console.log("Element replaced:", elementToReplace);  // Outputs the replaced element (now out of the DOM)
console.log("New element:", newElement);  // Outputs the new element added in its place

// Summary:
// - Use `remove()` to directly delete an element.
// - Use `removeChild()` on the parent element to delete a specified child.
// - Clear content by setting `innerHTML` to an empty string.
// - You can also use `parentNode.removeChild()` for flexibility, especially when you don’t have a parent reference directly.
// - `replaceChild` allows you to remove an element by replacing it with a new one.
