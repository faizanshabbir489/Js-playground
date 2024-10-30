/*
In js we have different type of loops:
1.For loop
2.while loop
3.Do while loop
4.for-of loop
5.for-in loop
*/

/*
The for loop is used to execute a block of code a certain number of times.
It consists of three parts: initialization, condition, and increment/decrement.
for (initialization; condition; increment/decrement) {
    Code to be executed
}
*/

for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

/*
The while loop repeatedly executes a block of code as long as a specified condition is true.
It's important to ensure that the condition eventually becomes false to avoid infinite loops.

while (condition) {
    Code to be executed
}
*/

let count = 0;
while (count < 5) {
    console.log("Count: " + count);
    count++;
}

/*
The do...while loop is similar to the while loop, but it guarantees that the block of code will execute at least once, 
even if the condition is false initially.

do {
    Code to be executed
} while (condition);
*/

let num = 0;
do {
    console.log("Number: " + num);
    num++;
} while (num < 5);

/*
The for...of loop is used to iterate over iterable objects like arrays, strings, and other collections.
It provides an easy way to access the values directly.

for (const element of iterable) {
    Code to be executed
}
*/

const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
    console.log("Fruit: " + fruit);
}

/*
The for...in loop is used to iterate over the properties of an object. 
It allows you to access the keys of an object directly.

for (const key in object) {
    Code to be executed
}
*/

const person = {
    name: "Alice",
    age: 30,
    city: "Lahore"
};

for (const key in person) {
    console.log(key + ": " + person[key]);
}


/*
Use for...of when you want to process elements in an array or other iterable structures and are primarily interested in their values.
Use for...in when you need to iterate over the properties of an object, especially when dealing with objects where you need to know the keys.
*/