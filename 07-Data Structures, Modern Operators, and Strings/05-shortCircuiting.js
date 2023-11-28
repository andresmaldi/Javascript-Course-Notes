// Short Circuiting (&& and ||)
// The result of using && or || doesn't always have to be a boolean.
// There are three properties about logical operators:
// They can use ANY data type, they can return ANY data type, they can do short-cirtuiting or short-circuit evaluation

// For the OR (||) operator, short-circuiting means that, if the first value is a truthy value, it will return it

console.log(3 || "Andres");
/* this will return the 3, since it is a truthy value. The other values won't be taken into account */

console.log("" || "Andres"); /* The string "Andres" will be returned */
console.log(true || 0); /* true will be returned */
console.log(
  undefined || null
); /* null will be returned, even though it's a falsy value, simply because it's the last one read */

// For the AND (&&) operator, short-circuiting works the exact opposite way than that of OR.

console.log(0 && "Andres");
/* This will return 0, since it is a falsy value, and won't read the other values. */

console.log(
  7 && "Andres"
); /* this will return the string "Andres", since it is the last value found */
