// Function Declarations and Expressions

// Function Declaration
// A function declaration is a normal function as we have seen before
// Example:

function calcAge1(birthYear) {
    return 2037 - birthYear;
};

let age1 = calcAge1(1994);
console.log(age1);

// Function Expression 
// A function expression differs from a function declaration in that it is stored in a variable
// Example:

let calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age2);

// IMPORTANT!! Functions are values, this is why they can be saved in variables

