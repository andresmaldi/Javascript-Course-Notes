// Statements and Expressions
// Here is the difference between statements and expressions

// Expressions
// This is a piece of code that produces a value
// Example:

3 + 4 // This is an expression since it produces a value
1990 // This is also an expression, since it will produce a value 
true && false && !false // This is also an expression, since it will produce a boolean value

// Statements
// A statement is a bigger piece of code that is executed and does not produce a value by itself
// Example:

if (23 > 10) {
    const str = '23 is bigger'; //Whenever something ends with a semi-colon, it is usually a statement
};
// All of this would be a statement, it doesn't produce a value.
// All it does is perform some actions like declaring a variable.

// All of this is important to know since Javascript expects statements and expressions in different situations
// One of these situations is a Template Literal

console.log(`I'm ${2037 - 1991} years old.`)
// In this example, Javascript expects an expression inside the ${}
// If we were to include a statement inside of it, such as an if/else statement, it would return an error
// Example:

/* console.log(`I'm ${
    if (23 > 10) {
    const str = '23 is bigger';
}; } years old.`); */

// This code wouldn't run, since it makes no sense for Javascript
// You can, however, include a variable, since it will produce a value.
// Example:

let name = 'Andres';
console.log(`I am ${name}.`);

// This will run, since the end result is a value

