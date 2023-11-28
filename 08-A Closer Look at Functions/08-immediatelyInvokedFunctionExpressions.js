// Immediately Invoked Function Expressions (IIFE)

// Sometimes, in Javascript, we need a function that will only execute once and then never again. Basically, a function that disappears after it's called.

// We could, in theory, create a function and only call it once, but this doesn't prevent it from being called later on in the code.

const runOnce = function () {
  console.log("This will never run again");
};

runOnce();

runOnce();

// What we actually want is to run a function immediately and not have to save it somewhere. To do so, we write a function expression, not assigning it to a variable.

(function () {
  console.log("This will never run again");
});

// It can also be done with arrow functions:

(() => console.log("This will ALSO never run again"))();

//
