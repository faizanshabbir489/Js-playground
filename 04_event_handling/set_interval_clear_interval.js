// set_interval_clear_interval.js

/*
 * setInterval and clearInterval in JavaScript
 * `setInterval` is used to execute a function repeatedly after a specified interval of time.
 * `clearInterval` is used to stop an interval that was set with `setInterval`.
 * This file demonstrates how to use these functions effectively.
 */

// 1. Basic setInterval Usage
// Syntax: setInterval(callbackFunction, intervalTimeInMilliseconds)
// The callback function will be executed every specified interval (e.g., 1000 ms for 1 second).
let count = 0;

let intervalID = setInterval(function() {
    count++;
    console.log("Interval running, count:", count);
}, 1000);  // Runs every 1 second (1000 milliseconds)

// 2. Clearing an Interval
// To stop `setInterval`, use `clearInterval(intervalID)` where intervalID is the ID returned by `setInterval`.
setTimeout(function() {
    clearInterval(intervalID);  // Stops the interval after 5 seconds
    console.log("Interval cleared!");
}, 5000);  // Run this after 5 seconds

// 3. Using Named Functions in setInterval
// You can pass a named function instead of an anonymous function to `setInterval`.
function updateCounter() {
    count++;
    console.log("Counter updated:", count);
}

let counterInterval = setInterval(updateCounter, 2000);  // Runs every 2 seconds

// Stopping the interval after a certain condition
setTimeout(function() {
    clearInterval(counterInterval);
    console.log("Counter interval cleared!");
}, 10000);  // Stops the interval after 10 seconds

// 4. Practical Example: Countdown Timer
// This example uses `setInterval` and `clearInterval` to create a simple countdown timer.
let countdown = 10;

let countdownInterval = setInterval(function() {
    if (countdown > 0) {
        console.log("Time remaining:", countdown);
        countdown--;
    } else {
        clearInterval(countdownInterval);
        console.log("Countdown complete!");
    }
}, 1000);  // Counts down every second

// 5. Clearing Intervals within a Function
// You can clear an interval inside a function to stop repeated execution based on certain conditions.
function startCounter() {
    let num = 0;
    let numInterval = setInterval(() => {
        num += 5;
        console.log("Incrementing num:", num);
        if (num >= 30) {
            clearInterval(numInterval);
            console.log("Counter stopped at", num);
        }
    }, 1000);  // Increments num every second until it reaches 30
}

// startCounter();  // Uncomment to start this counter

// Summary:
// - `setInterval` lets you repeat actions at regular intervals; `clearInterval` stops it.
// - Useful for animations, repeated data fetching, timers, etc.
// - Always clear intervals when they're no longer needed to avoid memory leaks.
