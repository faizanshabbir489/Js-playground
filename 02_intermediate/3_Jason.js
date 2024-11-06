// json_handling.js

/*
  JSON Handling in JavaScript
  ============================
  - JSON (JavaScript Object Notation) is a lightweight data format used for data exchange.
  - JSON is widely used to transmit data between a server and a web application.
  - JavaScript provides built-in methods to work with JSON data: `JSON.stringify` and `JSON.parse`.

  1. `JSON.stringify` - Converts JavaScript objects into JSON strings.
  2. `JSON.parse` - Parses JSON strings back into JavaScript objects.
*/

/*
  Example JavaScript Object
  -------------------------
  Let’s start with a simple JavaScript object:
*/

const user = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    isVerified: true,
    hobbies: ["reading", "coding", "hiking"]
  };
  
  /*
    Converting an Object to JSON
    ----------------------------
    - Use `JSON.stringify` to convert a JavaScript object into a JSON string.
    - JSON strings are often sent over the internet because they’re lightweight and universally supported.
  */
  
  const jsonString = JSON.stringify(user);
  console.log(jsonString);  // Output: '{"name":"Alice","age":25,"email":"alice@example.com","isVerified":true,"hobbies":["reading","coding","hiking"]}'
  
  /*
    Explanation:
    -------------
    - The object `user` is converted into a JSON string.
    - Note that JSON strings have double-quoted keys and values.
    - JSON does not support certain data types like functions or `undefined` properties, so they are not included in the resulting string.
  */
  
  /*
    Converting JSON Back to an Object
    ---------------------------------
    - Use `JSON.parse` to convert a JSON string back into a JavaScript object.
  */
  
  const parsedUser = JSON.parse(jsonString);
  console.log(parsedUser);  // Output: { name: 'Alice', age: 25, email: 'alice@example.com', isVerified: true, hobbies: [ 'reading', 'coding', 'hiking' ] }
  
  /*
    Explanation:
    -------------
    - `JSON.parse` takes a JSON string and parses it back into a JavaScript object.
    - Now you can access properties of `parsedUser` just like any regular JavaScript object.
  */
  
  /*
    JSON with Nested Objects
    -------------------------
    - JSON can handle nested objects and arrays.
  */
  
  const complexUser = {
    name: "Bob",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Metropolis",
      zip: "12345"
    },
    skills: [
      { name: "JavaScript", level: "Advanced" },
      { name: "Python", level: "Intermediate" }
    ]
  };
  
  const complexUserString = JSON.stringify(complexUser, null, 2); // Adding spacing for better readability
  console.log(complexUserString);
  
  /*
    Explanation:
    -------------
    - `JSON.stringify` can handle nested objects and arrays.
    - The second and third arguments (null, 2) make the JSON string more readable by adding indentation.
  */
  
  /*
    Important Notes on JSON:
    -------------------------
    - JSON format is text-based and only supports certain data types: strings, numbers, booleans, arrays, objects, and null.
    - Functions, symbols, and `undefined` are ignored when converting an object to JSON.
    - JSON is language-independent, making it widely usable beyond JavaScript.
  */
  
  //JSON.stringify accepts a replacer function to control which properties get stringified, allowing for customization of the JSON output.
  
const user1 = { name: "Alice", age: 25, password: "secret123" };

const filteredJson = JSON.stringify(user1, (key, value) => {
  if (key === "password") return undefined; // Exclude the password
  return value;
});

console.log(filteredJson); // Output: '{"name":"Alice","age":25}'

//JSON.parse accepts a reviver function to transform the parsed object’s properties.

const jsonString2 = '{"name":"Alice","age":25}';

const user2 = JSON.parse(jsonString2, (key, value) => {
  if (key === "age") return value + 1; // Increment age
  return value;
});

console.log(user2); // Output: { name: 'Alice', age: 26 }

