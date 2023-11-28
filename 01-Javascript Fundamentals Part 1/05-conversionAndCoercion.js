// Types of Conversion and Coercions
// Converting between types in progamming languages is used a lot
// For example, converting from number to string or string to number

// Tyoe Conversion
// This is manually converting something from one type to another

// Number conversion
// To convert a string into a number we can use the Number function
// IMPORTANT!! If you try to convert something that cannot be converted into a number, it will end up as NaN (Not a Number)
// Example:

const inputYear = "1991";
console.log(inputYear + 18); /* This will concatenate the string with a number giving you an incorrect answer */
console.log(Number(inputYear) + 18); /* This, instead, will convert the string into a number before concatenating, giving us the correct answer */
/* This will also not convert the original variable, the original in this case will remain a string */

// String conversion
// Works the same as the Number conversion
// Example:

const age = 18;

console.log(age); /* This is a number */
console.log(typeof age);

console.log(String(age)); /* This a string */
console.log(typeof String(age));

// Tyoe Coercion
// This is when Javascript automatically converts something from one type to another behind the scenes
// This happens when an operation has to deal with two values that have different types
// Javascript will then convert one of the values to the other one in order for it to work
// Example:

console.log("I am " + 23 + " years old"); /* In this case, we have a string, a number and then a string */
/* Javacript, for the operation to work, will convert the number into a string for them to concatenate */
/* This is the same as if it was written this way: */

console.log("I am " + "23" + " years old");

// An addition operation, using the plus sign (+) will convert numbers to strings

console.log("30" + "20" + 5);

// A subtraction operation, using the minus sign (-) will convert strings to numbers

console.log("30" - "20" - 5);

// Multiplication and division always convert string to numbers, otherwise they won't work

console.log("5" * "3");
console.log("15" / "3");

