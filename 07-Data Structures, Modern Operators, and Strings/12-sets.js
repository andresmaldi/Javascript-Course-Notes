// Sets
// Sets are a new type of data structure
// It is a collection of unique values, no duplicates are allowed.

// To make a set, we create a variable and set it to "new Set" followed by a parenthesis in which we will put an iterable (such as an array)

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet);
// Since no duplicates are allowed, the duplicated values in the set are removed. In this case, we end up with a set of three (3) values

// Sets are different from arrays first, because the elements are all unique, and second, because the order is irrelevant (even if they don't have a property name like an object).

// Strings are also iterable, so they can also be sets.

console.log(new Set("Andres"));

// They can also be empty.

console.log(new Set());

// And they have their own methods:
// The .size property gives us the number of read values in a set.

console.log(ordersSet.size);

// The .has() method returns a boolean if the value passed is in it or not.

console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));

// We can also add new elements with the .add() method

ordersSet.add("Garlic Bread");
console.log(ordersSet);

// Next, we can delete elements by using the .delete() method.

ordersSet.delete("Risotto");
console.log(ordersSet);

// Since sets are iterables, it is possible to loop them over.

for (const order of ordersSet) console.log(order);

// Finally, the last method is the .clear() method, used to delete every element in a set.

ordersSet.clear();
console.log(ordersSet);

// IMPORTANT!! Elements cannot be retrieved out of sets, they can only be removed, added or checked on.

// EXAMPLE:
// A good case use of sets is when you wish to check an array for single elements.
// For example, if you have a restaurant and you wish to check the existing positions in it.
// Let's begin with an array

const staff = ["waiter", "chef", "chef", "waiter", "manager", "manager"];

// We can easily make this array into a set

const staffUnique = new Set(staff);
console.log(staffUnique);

// Now, since sets don't allow us to retrieve elements, and we might want to do so, we will make it an array. This can be done by using Spread.

const staffUnique2 = [...staffUnique];
console.log(staffUnique2);

// We could also check the size

console.log(staffUnique.size);

// Or we could even check the number of letters in a string

console.log(new Set("bradpitt").size);
