// The New AT Method
// The new at method is a function which calls an element at the specified position

const arr = [23, 11, 64];

// Traditionally, an element at a specific position would be called like this

console.log(arr[0]);

// However, with the new at method, we can do the same using a function

console.log(arr.at(0));

// This may not look very useful or different at first, but there are some cases where it will be much easier to use

// A use case of this would be getting the last element of an array. We could use these to do so...

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

// Or we could use the new method for a much easier and clean code

console.log(arr.at(-1));
