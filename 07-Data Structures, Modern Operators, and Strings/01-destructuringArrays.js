// Destructuring Arrays
// Destructuring is a way of unpacking values from an array or an object into several variables

const arr = [2, 3, 4];

// Normally, to retrieve an element from an array we call them using their position

const a = arr[0];
const b = arr[1];
const c = arr[2];

// By destructuring, we can retrieve everything at once

const [x, y, z] = arr;
console.log(x, y, z);
// By placing the array on the right side of a variable, we are destructuring an array
// Important!! We are not changing the original array in any way and we are not creating a new array

// It is possible to destructure arrays within arrays.

const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested;
/* We can skip any values we don't wish to destructure by simply leaving it empty
such as with the value 4 in this array */
console.log(i, j, k);
