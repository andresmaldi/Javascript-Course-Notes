// Enhanced Object Literals
// An object literal is literally an object written as is in javascript
// Example:

const studies = {
  school: 2010,
  university: 2016,
};

const friends = ["Andres", "David", "Alejandra"];

const andres = {
  name: "Andres",
  lastName: "Garcia",
  eyeColor: "Green",
  birthYear: 1993,

  /* With enhanced object literals you can include an object within an object as a property. This is done simply by including the name of the nested object within the object. Before, it was necessary to write the property name followed by the variable it would point to, like this: studies: studies, */

  studies,

  /* With enhanced object literals, writing functions is easier, not needing to be named functions. Before, a function expression would be written like this: beepboop: function(num) {num + num}, */

  beepboop(num) {
    console.log(num + num);
  },

  /* Finally, with enhanced object literals, we can compute property names. Something that couldn't be done before. This means that properties can be created by either calling them from another variable or with operations with no need to be named literally or manually. To do so we put the "property name" inside square brackets. For example, we could take out the first element of an existing array to create the property, like this: */

  [friends[0]]: {
    name: "Andrés",
    age: 28,
  },

  /* Or, we could do an operation to name it, like this: */

  [`job-${2 - 1}`]: "Call center",
  [`job-${2 - 0}`]: "Programmer",
};

console.log(andres);

andres.beepboop(3);
