// form_events.js

/*
 * Form Events in JavaScript
 * JavaScript provides several events that are specifically useful for forms:
 * - `submit`: triggered when the form is submitted
 * - `input`: triggered when an input field value changes
 * - `focus` and `blur`: triggered when an input gains or loses focus
 * This file demonstrates how to use these events for common form interactions.
 */

// Selecting the form and input elements
const form = document.querySelector("#myForm");  // Assuming there's a form with id "myForm"
const nameInput = document.querySelector("#name"); // Input field with id "name"
const emailInput = document.querySelector("#email"); // Input field with id "email"

// 1. Handling Form Submit Event
// The `submit` event fires when a form is submitted. We can use this to validate data or prevent submission.
form.addEventListener("submit", function(event) {
    event.preventDefault();  // Prevents the form from submitting
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    
    if (nameValue && emailValue) {
        console.log("Form submitted:", { name: nameValue, email: emailValue });
    } else {
        console.log("Please fill out all fields!");
    }
});

// 2. Handling Input Events
// The `input` event fires whenever a user types or changes the content of an input field.
// Useful for live feedback, validation, or formatting.
nameInput.addEventListener("input", function() {
    console.log("Name input value:", nameInput.value);
});

emailInput.addEventListener("input", function() {
    console.log("Email input value:", emailInput.value);
});

// 3. Handling Focus and Blur Events
// `focus` is triggered when an element gains focus, `blur` is triggered when it loses focus.
// Great for form field styling or validation hints.
nameInput.addEventListener("focus", function() {
    console.log("Name input is focused");
});

nameInput.addEventListener("blur", function() {
    console.log("Name input lost focus");
    if (!nameInput.value) {
        console.log("Name cannot be empty");
    }
});

// 4. Real-Time Email Validation Example
// Here, we check if the input is a valid email format while the user types.
emailInput.addEventListener("input", function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(emailInput.value)) {
        emailInput.style.borderColor = "green";  // Green border for valid email
    } else {
        emailInput.style.borderColor = "red";  // Red border for invalid email
    }
});

// Summary:
// - Form events are essential for interactive form handling and validation in JavaScript.
// - `submit`, `input`, `focus`, and `blur` events help manage user interaction with forms.
// - Preventing form submission (`event.preventDefault()`) is a key technique to validate before sending.
