/*
  Function Parameters and Arguments
  
  Parameters are variables listed in the function definition,
  while arguments are the values passed to the function when it's invoked.
*/

function multiply(x, y) {
    return x * y;
}
  
console.log(multiply(4, 3)); // Output: 12
  
/*
Default Parameters (Introduced in ES6)
Default parameters allow you to set a default value for parameters if no argument is provided.
*/
  
function greetUser(name = "Guest") {
return `Welcome, ${name}!`;
}
  
console.log(greetUser());         // Output: Welcome, Guest!
console.log(greetUser("Alice"));  // Output: Welcome, Alice!
  
/*
Rest Parameters (Introduced in ES6)
Rest parameters allow a function to accept an indefinite number of arguments as an array.
*/

function sum(...args){
    let sum=0;
    for(let arg of args){
        sum+=arg;
    }
    return sum;
}
console.log(sum(1,23,4,5,6,6))  

/*
the call() method is used to change the context of "this" means it changes the object for "this" and it also accept arguments. 
*/

const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
  
const person1 = {
    firstName:"John",
    lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");

/*
With the apply() method, you can write a method that can be used on different objects.It is similar to call().
But it accepts arguments in form of arry
*/
person.fullName.apply(person1, ["Oslo", "Norway"]);

/*
We also have bind() to borrow a function from another object. it is helpful in callback so we dont lose the context of "this"
*/