// Simple Array Methods

let arr = ["a", "b", "c", "d", "e", "f"];

// SLICE METHOD
// With this method we will "cut" the array starting at the point you choose all the way to the end. This does not alter or mutate the original array. Rather, it creates an entirely new array.

console.log(arr.slice(2));

// We can also include the end parameter, where the slice will end, WITHOUT including said parameter

console.log(arr.slice(2, 4));

// Negative parameters can also be indicated, and just as with strings, this will go backwards on the array.

console.log(arr.slice(-2));

// And a negative ending parameter can also be included.

console.log(arr.slice(1, -2));

// It is possible to create shallow copies of an original array. Two methods can be used. Either simply using the .slice method with no parameters or the spread operator

console.log(arr.slice());
console.log(...arr);

// SPLICE METHOD
// The splice method is essentially the same as the slice method, however, the splice method DOES alter or mutate the original array, deleting the chosen parameters included when calling the method

console.log(arr.splice(2));
console.log(arr); // Here we can see the elements we have left after applying the splice method

// A very common use of the splice method is removing the last element of an array, possible using negative parameters

console.log(arr.splice(-1));
console.log(arr);

// When using the splice method, the second parameter included when calling it refers to the number of elements you wish to remove from a given array

arr = ["a", "b", "c", "d", "e", "f"];

console.log(arr.splice(1, 3));
console.log(arr); // In this case we begin at 1 ('b') and delete 3 elements ('b', 'c', and 'd')

// REVERSE METHOD
// Using the reverse method, we do exactly what it implies, we reverse the order of an array.

let arr2 = ["l", "k", "j", "i", "h", "g"];

console.log(arr2.reverse());

// This method DOES alter or mutate the original array

console.log(arr2);

// CONCAT METHOD
// This method is used to concatanate two arrays, mixing them together. We first call the method with a first array and then specify which array we wish to add at the end

arr = ["a", "b", "c", "d", "e", "f"];

const letters = arr.concat(arr2);
console.log(letters);

// Another way of doing this is of course by using the spread operator

console.log([...arr, ...arr2]);

// JOIN METHOD
// The join method connects each element in an array with the specified symbol

console.log(letters.join("-"));
console.log(letters.join("."));
