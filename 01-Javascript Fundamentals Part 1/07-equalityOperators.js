// Equality Operators
// In Javascript, we can check if several values are equal.
// For this, we have several equality operators we can use.

// Strict equality operator
// This is used to check if a value is exactly equal to another value.
// If they are exactly equal, any operation will be true, otherwise it will be false.
// IMPORTANT!! THIS DOES NOT PERFORM TYPE COERCION, IT WILL ONLY CHECK THE RESULT.
// For a strict equality operator we use triple equal symbols '==='
// Example:

const age = 18;

if (age === 18) console.log("You are of age!"); /*If an If block only has one line, the curly braces '{}' are not necessary.*/

// Since age is the number 18 and we are comparing it to the number 18, they will be true and the code will run.

console.log(18 === "18"); /* This will be false, since type coercion won't take place. */

// Loose Equality Operator
// This operator does perform type coercion to check if two values are the same or not.
// Example:

console.log(18 == "18"); /* This will be true, since type coercion will take place. */

// Strict Inequality Operator
// This works the same way as a Strict Equality Operator but checks for inequality rather than equality
// To use this operator, we use an exclamation mark followed by two equal signs '!=='
// Example:

console.log(15 !== 15); /* This would be false, since they are the same */
console.log(15 !== "15"); /* This would be true, since they are different */

// Loose Inequality Operator
// This works the same way as a Loose Equality Operator but checks for inequality rather than equality
// To use this operator, we use an exclamation mark followed by on equal sign '!='
// Examples:

console.log(15 != 15); /* This would be false, since they are the same */
console.log(15 != "15"); /* This would also be false, since type coercion takes place, making them the same */