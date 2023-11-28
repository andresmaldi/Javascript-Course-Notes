// Regular Functions vs Arrow Functions

const andres = {
  firstName: "Andres",
  year: 1994,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => console.log(`Hey ${this.firstName}`),
  /* Arrow functions do not get a this keyword, so even in this example, the this keyword will be pointing to the window object */
  /* If it were a regular function, it would receive its own this keyword, and thus, point to the object in which it is within */
};

andres.greet();
