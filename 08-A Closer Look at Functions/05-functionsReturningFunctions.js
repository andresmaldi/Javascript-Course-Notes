// Functions Returning Functions
//It is possible to make functions that return other functions
// They look like this:

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}.`);
  };
};

// This means that, if saved into a variable, that variable becomes a function itself

const greeterHey = greet("Hey");

// This can then be called like any other function, since it is now one

greeterHey("Andres");
greeterHey("Steven");

// Alternatively, you can call the function inmediately after creating it, just like this:

greet("Hello")("Andres");

// It is also possible to do this using an arrow function, just like this:

const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}.`);

greetArrow("Hello")("Peter");
