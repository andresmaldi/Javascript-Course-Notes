// Boolean Logic
// Boolean logic is a branch of computer science which uses true and false values to solve complex operations
// The most basic of these are the AND, OR and NOT operators

age = 16;
let a = age >= 20; /* This is false */
let b = age < 30; /* this is true */

console.log(a);
console.log(b);

// NOT operator
// This one is used to invert the boolean value of a variable
// For this operator we use an exclamation mark before the variable or value '!'
// Example:

console.log(!a);/* This is now true */
console.log(!b); /* This would now be false */

// AND operator
// This operator is used for whenever you want to check if ALL of the values in an operation are true.
// If all of them are true, the end result will be true.
// If any of them are false, no matter how many others are true, the end result will be false
// For this operator we use two ampersands '&&'
// Example:

console.log(a && b); /* This is false since one of the is false */
console.log(!a && b); /* This is true since both of them would be true */
console.log(!a && !b); /* This is false since b is now false, even though a is true */

// OR operator
// This operator is used for whenever you want to check if AT LEAST one of the values in an operation is true
// If just one of them is true, the end result will be true.
// For the end result to be false, all of the values must be false
// For this operator we use two vertical slashes '||'

console.log(a || b); /* This is true since one of them is true */
console.log(a || !b); /* This is false, since both of them are false */
console.log(!a || !b); /* This is true, since a is now true, even though b is false. */

// Here is an example on how to use it with an IF/ELSE statement

let hasDriversLicense = true // a
let hasGoodVision = false; // b

if (hasDriversLicense && hasGoodVision) {
    console.log("You are able to drive");
} else {
    console.log("You cannot drive.");
};

// This person would not be allowed to drive, since both values would have to be true

if (hasDriversLicense || hasGoodVision) {
    console.log("You are able to drive");
} else {
    console.log("You cannot drive.");
};

// This person would be allowed to drive, since only one of the values is needed to be true
// We can also add more values and the same principles will apply

let isTired = true; // c

if (hasDriversLicense && !hasGoodVision && isTired) {
    console.log("You are able to drive");
} else {
    console.log("You cannot drive.");
};

// This person would be allowed to drive, since all of them are true. 
// IMPORTANT!! Note the NOT operator on hasGoodVision

if (!hasDriversLicense || hasGoodVision || !isTired) {
    console.log("You are able to drive");
} else {
    console.log("You cannot drive.");
};

// Finally, this person would not be allowed to drive, since all of the values are false
