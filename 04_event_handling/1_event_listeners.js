// event_listeners.js

/*
 * Event Listeners in JavaScript
 * Event listeners allow us to listen for user interactions, like clicks, keystrokes, and mouse movements, 
 * and execute functions in response.
 * This file demonstrates the different ways to add, remove, and manage event listeners.
 */

// 1. Adding an Event Listener
// Use `addEventListener` to attach an event to an element. 
// Syntax: element.addEventListener('event', function);
let button = document.getElementById("myButton");

button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// 2. Using Named Functions with Event Listeners
// You can define a function separately and then pass it to `addEventListener`.
function showAlert() {
    alert("Button clicked!");
}

button.addEventListener("click", showAlert);

// 3. Removing an Event Listener
// To remove an event listener, you must pass the exact same function reference used in `addEventListener`.
button.removeEventListener("click", showAlert);

// 4. Event Object
// When an event occurs, an event object is automatically passed to the callback function,
// containing information about the event (like the target element, type of event, etc.).
button.addEventListener("click", function(event) {
    console.log("Event type:", event.type);  // Outputs: "click"
    console.log("Event target:", event.target);  // Outputs: <button id="myButton">...</button>
});

// 5. Listening for Keyboard Events
// Key events like `keydown`, `keyup`, and `keypress` allow us to respond to user typing.
document.addEventListener("keydown", function(event) {
    console.log("Key pressed:", event.key);  // Outputs the key pressed, like "Enter" or "a"
});

// 6. Using `once` Option in Event Listener
// Setting `{ once: true }` as an option makes the event listener trigger only once and then automatically removes itself.
button.addEventListener("click", function() {
    console.log("This will log only once!");
}, { once: true });

// 7. Adding Multiple Event Listeners
// You can attach multiple listeners to the same event type on the same element.
button.addEventListener("click", () => console.log("First listener"));
button.addEventListener("click", () => console.log("Second listener"));

// 8. Stop Propagation of Events
// `stopPropagation()` prevents an event from bubbling up to parent elements, stopping it at the current level.
button.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("Click event stopped at button, won't reach parent.");
});

let container = document.getElementById("container");
container.addEventListener("click", () => console.log("Container clicked"));

// 9. Prevent Default Behavior
// `preventDefault()` stops the default action of an element. 
// For example, it can prevent a form from submitting.
let link = document.getElementById("myLink");
link.addEventListener("click", function(event) {
    event.preventDefault();  // Stops the link from navigating
    console.log("Link default action prevented");
});

// Summary:
// - `addEventListener` attaches an event listener; `removeEventListener` removes it.
// - Event object provides info about the event, and `stopPropagation()` stops bubbling.
// - `preventDefault()` cancels the default action, useful for links, form submissions, etc.
// - The `once` option lets you execute a listener only once, then it removes itself automatically.
