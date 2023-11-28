// The Conditional Ternary Operator
// This allows us to write an if/else statement but all in one line

const age = 23;


// To use the Conditional Ternary Operator we begin with the condition, in this case a boolean comparison
// We then use a question mark '?' to begin the statement
// Then we follow with a colon ':', after which we will write the else statements

age >= 18 ? console.log('I like to drink wine.') : console.log('I like to drink water');

// This is useful for saving it into a variable
// Example:

const drink = age >= 18 ? 'Wine' : 'Water';
console.log(drink);

// It can, of course, be defined as an if/else statement, but it can be more cumbersome
// With a Ternary Operator we can simplify things greatly
// This is how it would look as an if/else statement

let drink2;

if (age >= 18) {
    drink2 = 'Wine';
} else {
    drink2 = 'Water';
};

console.log(drink2);

// Ternary Operator are considered values by Javascript
// They can, then, be included inside a Template Literal
// Example:

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
