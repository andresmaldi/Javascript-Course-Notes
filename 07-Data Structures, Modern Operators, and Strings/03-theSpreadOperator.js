// The Spread Operator
// The spread operator can be used to expand or unpack all of an array's elements.

const arr = [7, 8, 9];
console.log(...arr);
// With the spread operator, javascript will take out all of an array's elements indiviudally

// We can then use that information for, for example, creating a new array
const newArr = [1, 2, ...arr];
console.log(newArr);

// The spread operator works in a similar way to destructuring
// A big difference is that by using the spread operator we are taking all of the elements at once
// They are also not saved into variables, and they are always separated by commas

// Copying Arrays

const newerArr = [...newArr];
/* Here, we are creating a shallow copy of an array, in a similar way to using the .assign method */

// Joining two arrays (or more)

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

const joinArr = [...arr1, ...arr2, ...arr3];
console.log(joinArr);

// The spread operator is not exclusive to just arrays, it can be used on anything that is iterable
// Iterables include: arrays, strings, maps, sets, but NOT objects.

const str = "Andres";
console.log(str);
console.log(...str);
// Multiple values separated by a comma are expected only when passing arguments into a function or when creating a new array
// The spread operator will not work for example, in a template literal, since it does not accept multiple values separated by a comma

/* console.log(`${...str}`); */
// This will give us an error of Unexpected Token '...'

// Objects
