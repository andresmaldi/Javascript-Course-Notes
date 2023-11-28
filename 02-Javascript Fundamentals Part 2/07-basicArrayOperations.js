// Basic Array Operations (Methods)
// These are built.in functions that you can apply directly on arrays

// Push method
// This works to ADD an element to the end of an array
// This method returns the length of the new array

const friends = ["Michael", "Will", "Joanna"];
console.log(friends);

friends.push("Jay");
console.log(friends);

const newLength =
  friends.push("Charles"); /* This should log the length which is 5) */
console.log(newLength);

// Unshift Method
// This works to ADD an element to the very beginning of an array
// Just like the push method, this returns the length of the modified array

friends.unshift("John");
console.log(friends);

// Pop Method
// This works to REMOVE the last element of an array
// This does not return the length of the array but rather the removed element

friends.pop(); /* In this case, it is not necessary to pass in an argument, since it is just removing an already existing element */
console.log(friends);

const removedElement = friends.pop();
console.log(removedElement); /* This should log the removed element ("Jay") */
console.log(friends);

// Shift Method
// This works to remove the first element of an array
// Once again, it will return the element removed

friends.shift(); /* No argument is necessary */
console.log(friends);

// IndexOf Method
// This works to return the index of a specific element

console.log(friends.indexOf("Will")); /* This should be indexOf 1 */
console.log(friends.indexOf("Michael")); /* This should be indexOF 0 */

console.log(
  friends.indexOf("Bob")
); /* A nonexistent element will return indexOf -1 BUT it will not add it to the array */
console.log(friends);

// Includes Method
// This will check if an element is in the array, returning true if it is and false if it isn't
// IMPORTANT!! This method uses strict equality to check for the elements

console.log(
  friends.includes("Michael")
); /* this will be true, since there is a "Michael" element in the array */
console.log(
  friends.includes("Bob")
); /* This will be false, since there is no "Bob" element in the array */

friends.push(23);
console.log(
  friends.includes("23")
); /* This will be false, since 23 the number is not strictly equal to "23" the string */
