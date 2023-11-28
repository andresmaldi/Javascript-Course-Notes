// Dot vs. Bracket Notation
// These notations are used to retrieve as well as modify information in an object

const andres = {
  firstName: "Andres",
  lastName: "Maldonado",
  age: 27,
  job: "programmer",
  friends: ["Ana", "Laura", "Carlos"],
};

console.log(andres);

// Dot Notation
// For this notation we simply write the name of the object followed by a dot followed by the name of the property we wish to access
// Example

console.log(andres.lastName);

// Bracket Notation
// For this notation we simply write the name of the object followed by the name of the property we wish to access written within bracket

console.log(andres["lastName"]);

// A difference between this and Dot Notation is that within brackets we may have any kind of operation that leads to the property name
// Example:

const nameKey = "Name";
console.log(andres["first" + nameKey]);
console.log(andres["last" + nameKey]);

// Adding or Modifying an element
// To add or modify elements within an objects we simply call that element and proceed to change it
// Example:

andres.middleName = "Felipe";
andres["location"] = "France";
console.log(andres);

console.log(
  `${andres.firstName} has ${andres.friends.length} friends, and his best friend is called ${andres.friends[0]}.`
);
