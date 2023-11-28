// Functions
// Functions are the fundamental building block of Javascript applications
// A function is a piece of code that can be reused over and over again (similar to variables but for whole lines or blocks of code)

// Let's create a function called 'logger'

function logger() {
    console.log('My name is Andres');
}

// To call (or run or invoke) a function, we simply write the name of the function followed by a parenthesis

logger();

// We can call a function as many times as we want

logger();
logger();

// Functions not only reuse code, they can also receive and return data
// For this, we need to define PARAMETERS of a function
// PARAMETERS are like variables, but they are defined inside a function
// These are placed inside the parenthesis after the function name (if there are more than one, we simply separate them witha coma)
// Example:

function fruitProcessor(apples, oranges) {
    let juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice; // return will return any value from a function, it is the end result of executing a function
};

fruitProcessor(5, 0);
// The numbers 5 and 0 are the inputs for apples and oranges respectively
// They must be assigned whenever you call the function
// The values of these parameters are called ARGUMENTS

// IMPORTANT!! To use the value that is returned we need to store it in a variable
// Example:

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

let appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// You can also directly call the function in a console.log but it won't be stored in a variable

console.log(fruitProcessor(8, 10));