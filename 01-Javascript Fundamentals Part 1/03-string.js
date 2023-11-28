// Strings
// Strings are very important in programming, they are used for everything that is writing with letters.
// Here is an example of a variable that is string:

const firstName = "Jonas";
// Strings are placed between single quotes ('example') or double quotes ("example")

// We can also concatenate strings by simply using the addition operator.
// Here is an example:

const job = "teacher";
const birthYear = 1992;
const year = 2037;

const jonas = "I am " + firstName + ", a " + (year - birthYear) + " year old " + job;
console.log(jonas);
// This would be a concatenation of strings to make a longer string.

// When concatenating strings, some things are not taken into account, such as spaces.
// There is a much easier way to then write longer strings in a more controled and natural manner.
// These are called TEMPLATE LITERALS
// Template literals are written using the backticks (`example`)

let example = `This is a template literal.`;
console.log(example);

// Within template literals you can include any variable or constant you have already created before.
// For this, simply include the variable or constant inside a dollar sign and curly braces (${variableGoesHere})

const jonasNew = `I am ${firstName}, a ${year - birthYear} year old ${job}.`;
console.log(jonasNew);

// For multiple line strings we have two options:
// The \n\ Option
// with this option we simply include a /n and move onto a new line
// Here is an example:

console.log("I am \n\
a new line \n\
in a String.")

// However, this can be cumbersome. A much better option is using Template Literals.
// With this option we simply hit enter and Javascript will immediately read it as a new line
// Here is an example:

console.log(`This is
a much
better option`)