/* In JS, we use conditional statements to make decisions about which program statement to run based on certain conditions.
   JS conditionals:
   - if, else 
   - else if
   - ternary operator
   - switch
*/

/* If-Else: An if statement evaluates a condition and executes a block of code if that condition is true.
   If the condition is not true, then the else block will run.
*/

let temperature = 26;
if (temperature > 25) {
    console.log("It's a hot day!"); // This will be executed if the condition is true
} else {
    console.log("It's a cool day!"); // This will be executed if the condition is false
}

/* Else If: The else if statement allows you to check multiple conditions. 
   It is placed between an if and an else and is executed if its condition is true when the previous conditions are false.
*/

var temperature2 = 15; // Updated variable name to temperature2 for consistency
if (temperature2 > 25) {
    console.log("It's a hot day!");
} else if (temperature2 > 15) {
    console.log("It's a warm day!"); // This will be executed if the temperature is greater than 15 but less than or equal to 25
} else {
    console.log("It's a cool day!"); // This will be executed if none of the above conditions are true
}

/* The ternary operator is a shorthand way to write an if-else statement. 
   It takes three operands: a condition, a value if true, and a value if false. 
   It's often used for simple conditional assignments.
*/

let age = 18;
let status = (age >= 18) ? "Adult" : "Minor"; // If age is 18 or older, status is "Adult"; otherwise, it's "Minor"
console.log(status); // Output: "Adult"

/* Switch: A switch statement is used to perform different actions based on different conditions.
   It evaluates a single expression and matches it against various case values, allowing for cleaner code when you have many possible conditions.
*/

let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("You selected apple."); // This will be executed if fruit is "apple"
        break; // Exit the switch after executing the matching case
    case "banana":
        console.log("You selected banana.");
        break;
    default:
        console.log("Unknown fruit."); // Executed if none of the cases match
}

// Additional test cases (optional)
fruit = "banana";
switch (fruit) {
    case "apple":
        console.log("You selected apple.");
        break;
    case "banana":
        console.log("You selected banana."); // This will be executed if fruit is "banana"
        break;
    case "orange":
        console.log("You selected orange.");
        break;
    default:
        console.log("Unknown fruit.");
}
