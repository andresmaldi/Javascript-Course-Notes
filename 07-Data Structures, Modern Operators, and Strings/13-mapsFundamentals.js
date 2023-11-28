// Maps: Fundamentals
// Maps are data structures that are used to map values to keys just like object
// A big difference is that in maps, keys can have any types, as opposed to being just strings like in objects.

// To create a map, we create a variable and set it to "new Map" followed again by a parenthesis.

const rest = new Map();

// Maps, like sets, have their own methods as well.
// The .set() method adds a new property. First we write the key and then the name of the key.

rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");

// This method is chainable, since it updates immediately upong being called.

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open.")
  .set(false, "We are closed");

console.log(rest);

// To read data from a map, we use the .get() method, passing simply the name of the key.

console.log(rest.get("name"));
console.log(rest.get(true));

// We can use the .has() method to check if the map contains a certain property.

console.log(rest.has("categories"));

// There's also a .delete() method used for deleting elements based on the key

rest.delete(2);
console.log(rest);

// Maps also have a .size property

console.log(rest.size);

// Finally, we can also clear all elements using the .clear() method.

// rest.clear();
console.log(rest);

// EXAMPLE
// An example on how to use maps effectively could be, imagine that we had the time, which we will represent in a variable for now.
const time = 21;

// Then, we want to check whether the restaurant is open or not. To do so, we can use the .get() method to check for a boolean. The boolean in this case will be the result of a comparison done using the opening and closing times of the restaurant found in the 'open' and 'close' properties of the map. Like this:

console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// IMPORTANT!! When using arrays as keys, it is important to set them from a variable, otherwise the map won't be able to retrieve the information when called.

const map = new Map();
map.set([1, 2], "Test");
console.log(map.get([1, 2]));
/* This will be undefined, since the array we used to create the key and the one to call it are different in the HEAP. For this to work, we have to save it to a variable. */

const arr = [1, 2, 3];
map.set(arr, "Test");
console.log(map.get(arr));
