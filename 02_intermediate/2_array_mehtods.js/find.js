// find.js

/*
  The `find` Method in JavaScript Arrays:
  -----------------------------------------
  - The `find` method is used to locate the first element in an array that satisfies a specified condition.
  - It returns the element if found, or `undefined` if no element matches the condition.
  - This method stops searching as soon as it finds the first match, making it efficient for large arrays when only one result is needed.

  Example:
  ---------
  Let's find the first number in an array that is greater than 10.
*/

const numbers = [3, 9, 12, 15, 7, 8];

const firstLargeNumber = numbers.find(num => num > 10);
console.log(firstLargeNumber);  // Output: 12

/*
  Using `find` with Objects:
  ----------------------------
  - You can also use `find` to locate an object within an array of objects based on a property value.
  - Let's find the first person in an array of people who is over 18.
*/

const people = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 19 },
  { name: "Charlie", age: 16 }
];

const adult = people.find(person => person.age > 18);
console.log(adult);  // Output: { name: "Bob", age: 19 }

/*
  Important Points:
  ------------------
  - `find` returns the first element that satisfies the condition, not all elements.
  - If no elements satisfy the condition, it returns `undefined`.
  - Great for finding single instances based on a condition without needing the whole array.
*/

