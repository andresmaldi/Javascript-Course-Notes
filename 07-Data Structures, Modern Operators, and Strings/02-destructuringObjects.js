// Destructuring Objects

let william = {
  firstName: "William",
  lastName: "Tell",
  age: 40,
  friends: ["James", "John", "Bob"],
};

const { firstName, lastName, age } = william;
console.log(firstName, lastName, age);

// It is also possible to rename the deconstructed variable names by simply destructuring them while renaming them.

const { firstName: name, friends: bestfriends } = william;
console.log(name, bestfriends);

// This will not change the the name of the properties in the original object.
console.log(william);

// Default Values
// We can also set default values for either inextistent properties or for already created properties.
// However, if the property already exists, a default value won't be created, it will simply remain with the values already found in that value.
const { partners = [], friends = [] } = william;
console.log(partners, friends);

console.log(friends);
// Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// To destructure this object, we cannot declare them again using const or let, since they are already declared
// Thus, we must refrain from using them and simply write the curly braces, like this:

/* {a, b} = obj; */

// However, when starting a line with a curly brace, Javascript will always expect a code block.
// To solve this, we must wrap everything into a parenthesis.

({ a, b } = obj);
console.log(a, b);

// Nested Objects
// It is possible to destructure nested objects all at once

const movieReviews = {
  Titanic: {
    year: 1999,
    genre: "drama",
    rating: "good",
  },
  Saw: {
    year: 2001,
    genre: "horror",
    rating: "good",
  },
};

const {
  Titanic: { year, genre, rating },
  Saw: { year: y, genre: g, rating: r },
  /* You can either deconstruct with the exact same name of the property
  or you can name the variable whatever you want by naming it after declaring what property it is you are destructuring */
} = movieReviews;

console.log(year, genre, rating);
console.log(y, g, r);
