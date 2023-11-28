// The This Keyword
// this keyword/variable is a sepcial variable that is created
// for every execution context (every function)
// It takes the value of (points to) the "owner" of the function
// in which the THIS keyword is used.

const andres = {
  name: "Andres",
  year: 1994,
  calcAge: function () {
    return (
      2037 - this.year
    ); /* this.year is the same as andres.year in this example */
  },
};

// Arrow functions do not get a this keyword.

// In event listeners, the this keyword points to the DOM element that the handler is attached to
