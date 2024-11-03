/*
Destructuring is a handy feature in JavaScript that allows you to extract values from arrays or properties from objects into distinct variables.

Array Destructuring: Extracts values from arrays based on position.

Object Destructuring: Extracts properties by name.

Nested Destructuring: Allows deeper extraction of data in nested structures.

Destructuring in Functions: Helps simplify parameter handling, making function code cleaner.

*/

//1. Array Destructuring :Array destructuring allows you to unpack values from an array into separate variables based on their position.

const array=['red','pink','white'];
const [first,second,third]=array;
console.log(first); // Output: "red"

//we can also skip elements or set default
const array1=['red','pink'];
const [ar1, , ar3 = "blue"] = array1;
console.log(ar3) // output will be blue.

//2. Object Destructuring: Object destructuring works by matching property names, allowing you to pull out specific properties from an object.

const obj={name:'faizan',age:18,height:'6ft'}
const {name,age,height}=obj;
console.log(name) // output:  faizan

//we can also asign default but we cannot skip propertise
const person = { pname: "faizna" };
const { pname,page = 18 } = person;

//3. Nested Destructuring: You can destructure nested arrays or objects by specifying the nested structure in the assignment.

const person1 = {
    name: "Alice",
    address: {
      city: "New York",
      zip: 10001,
    },
};
  
const {address: { city, zip },} = person;
  
console.log(city); // Output: "New York"
console.log(zip);  // Output: 10001
  
//4. Destructuring with Functions: Destructuring is often used in functions to directly extract parameters from an object passed to the function,
//which can make the code more readable.


function printPerson({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  
const person2 = { name: "Bob", age: 30 };
printPerson(person); // Output: "Name: Bob, Age: 30"
  