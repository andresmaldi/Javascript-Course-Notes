// Arrays
// Arrays are a data structure
// They are a container where you can put store information that you can then access

// Arrays are used when you wish to group different values in one same structure
// Instead of this:

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// We could, instead, use an array.
// Example:

const friends = ["Michael", "Steven", "Peter"];
/* Arrays use square brackets to work "[]" and every item must be separated with a comma */

// This way of writing arrays is called a Literal Syntax and is more common
// There is another way of writing Arrays:

const years = new Array(1991, 1984, 2008, 2020);
/* The "new" keyword is necessary for the array to be created */

// In order to get something out of an array, we need once again the brackets

console.log(friends[0]);
/* In this case, we are calling the first element of the 'friends' array, in this case it's "Michael" */

// We can also learn the length of an array (or number of elements in it) using the length property

console.log(friends.length);
/* In this case, we are logging the number of elements in the 'friends' array*/

// We can algo get the last element of an array by subtracting one from the length, like this:

console.log(friends[friends.length - 1]);

// We can also change any element in the array by calling it out directly

friends[2] = "Jay";

console.log(friends);
/* This will change the third element ("Peter") to a new element */

// An array can have any type of value at the same time

const friendOne = ["James", "Smith", 28];

console.log(friendOne);

// We could even place existing variables withing them

const firstName = "Lucie";
const lastName = "Nostra";
let age = 2022 - 1991;
const friendTwo = [firstName, lastName, age];

console.log(friendTwo);

// Or we can even include arrays within an array

const me = ["Andres", "Maldonado", 27, friends];

console.log(me);

// Entire arrays cannot be used in arithmetical operations
// Only singles out elements can be

const nineties = [1990, 1991, 1992, 1993, 1994];
console.log(
  nineties + 10
); /* This will only convert everything into a String and add a 10 at the end */
console.log(nineties - 10); /* This will tell us it is Not a Number (NaN) */
console.log(
  nineties[3] + 10
); /* This, instead, will give us the fourth element in the array and then add 10 */
