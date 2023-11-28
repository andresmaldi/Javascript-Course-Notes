// Object Methods
// Just like arrays, objects can have their own built-in functions called metohds
// An example of this would be a function within the object
// Example:

const andres = {
  firstName: "Andres",
  lastName: "Maldonado",
  birthYear: 1994,
  job: "programmer",
  friends: ["Laura", "Ana", "Carolina"],
  hasDriversLicense: true,

  calcAge: function () {
    /* Function Expressions, being values, can be properties within an object */
    return 2022 - this.birthYear;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

// We can then call this function by accessing the property
// Example:

console.log(andres.calcAge());

// Or in bracket notation

console.log(andres["calcAge"]());

console.log(andres.getSummary());
