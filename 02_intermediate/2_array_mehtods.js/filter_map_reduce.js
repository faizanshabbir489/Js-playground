/*
1. filter()
2. map()
3. reduce()
*/

/*
filter()
The filter() method creates a new array containing elements that pass a specific test provided by a function. 
It doesn't alter the original array; instead, it "filters" the array based on the condition given.
*/

let numbers=[1,2,3,4,5];

let evennum=numbers.filter(num=> num%2==0);
console.log(evennum) // output: [2,4]

/*
map()
The map() method creates a new array by transforming every element of the original array.(means loops on every element)
This method applies a function to each element and returns a new array with the transformed elements.
*/

let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6]   

/*
reduce()
The reduce() method applies a function to each element of an array to reduce it to a single value. 
It’s commonly used to sum up, accumulate, or combine all items in an array in some way.
*/

//in this accumulator refers to starting value as in this it is zero ,0) in the end if we dont assing this it will be 1 and it keeps on updating
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 10

/*
Summary
map --> changes each item.
filter --> selects specific items.
reduce --> combines items into one value.
*/