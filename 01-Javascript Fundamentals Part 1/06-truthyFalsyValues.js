// Truthy and Falsy Values

// Falsy values are values that are not exactly false, but will become so when we try to convert them into booleans.
// There are 5 falsy values:

0 /* the number zero*/
"" /* An empty string */
undefined
null
NaN

// All of these values will become false when we try to convert them into a boolean.
// they are not false initially but will be if tried to be converted into a boolean.

// Any other values are considered truthy, they will always be true if converted into a boolean.
// Examples:

console.log(Boolean(0)); /* This will be false */
console.log(Boolean(undefined)); /* This will be false */
console.log(Boolean("")); /* This will be false */
console.log(Boolean("Andres")); /* This will be true */
console.log(Boolean({})); /* This will be true */

// Truthy and falsy values are applied when Javascript is forced to coerce something
// into a boolean, for example an If/else statement.
// If/else statements always work in a boolean (true or false) context.
// In an If/else statement then, the value will be converted into a boolean and truthy and falsy values will be applied.
// Example:

let money = 0;

if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job.");
};

// In this example, money being zero will be coerced into a boolean. 
// Since 0 is a falsy value, it will be coerced into false.
// But if we change money to be another number other than 0,it will be a truthy value and be coerced into true.
// Example:

money = 100;

if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job.");
};

// Another example with a different falsy value:

let height;
console.log(typeof height); /* Since height as a variable is left empty it will be undefined */

if (height) {
    console.log("Height is defined!");
} else {
    console.log("Height is not yet defined.");
};

// Since height is undefined as a variable it will be coerced in the if/else statement as false.

