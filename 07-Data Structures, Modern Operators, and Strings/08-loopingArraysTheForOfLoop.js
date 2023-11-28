// Looping Arrays: The For-Of Loop
// The For Of Loop loops over every item in an array
// In each iteration it will give us access to the current array element (which we specify ourselves)

let names = ["Peter", "Joseph", "John", "Jesus", "Abdiel"];

for (const name of names) console.log(name);

// It is also possible to get the index of each of the elements
// To do so, we need to use the .entries function

for (const name of names.entries()) {
  console.log(name);
}
/* The .entries function is an iterator which, in an array, creates an array of both the index and the element itself */

// Destructuring is also possible in a For Of Loop

for (const [n, el] of names.entries()) {
  console.log(`${el} is my number ${n + 1} friend.`);
}
