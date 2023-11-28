// Primitive vs. Objects in Practice

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";

console.log(lastName, oldLastName);
// These two variables will now be different.
// Remember that Primitive Type values are stored in different "addresses" in the stack.

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log(jessica);
console.log(marriedJessica);
// In this case, the values for both objects will be the same.
// Remember that even though they are different variables, they both point to the same reference.
// The reference in this case being the object itself and its values.
// This is the reason why we can change const variables as well, since we are not changing the value of these variables, because the value is a reference

// There is a way of copying objects without them pointing to the same reference though

const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
// Using the function Object.assign(), we can copy the initial values of an object into another one.

jessicaCopy.lastName = "Davis";

console.log("Before:", jessica2);
console.log("After:", jessicaCopy);
// The values of lastName will be different for these two objects even though jessicaCopy is copying the values of jessica2
// However this only copies the higher level values not those that are deeper inside the object.
// For example, this won't work with objects inside of objects.
// Another object inside an object will still point to the same reference-

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before:", jessica2);
console.log("After:", jessicaCopy);
// The family array values will be the same, even though we copied the object through the Object.assign() function
// This is because in the call stack, they continue to point to the same reference, even though their parent objects do not.

// This is called a shallow copy as opposed to a deep copy.
