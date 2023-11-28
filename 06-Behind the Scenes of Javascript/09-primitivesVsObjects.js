// Primitives vs. Objects (Primitive vs. Reference Types)
// Remember that primitives in Javascript are Number, String, Boolean, Undefined, Null, Symbol, and BigInt.
// Objects are much wider and include but are not limited to: Object Literals, Arrays, Functions, and many many more.
// In memory, they are usually called Primitive Types and Reference Types.

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

// Primitive type values work differently than those of objects or Reference Types
// For a good diagram explaining exerything, check the note images.

const me = {
  name: "Andres",
  age: 30,
};

const friend = me;
friend.age = 27;

console.log(friend);
console.log(me);
