// Looping Arrays, Breaking and Continuing
// Looping arrays is very common in Javascript since they are indexed and numbered

const andres = [
  "Andres",
  "Maldonado",
  27,
  ["Michael", "John", "Richard"],
  true,
];

for (let i = 0; i < andres.length; i++) {
  /* This loop will begin at 0 (0 being the index of the array), stop when the array hits the length of the array and increment by one */
  console.log(andres[i], i);
}

// With Loops it is possible to create arrays
// Example:

const birthYears = [1990, 1991, 1992, 1993, 1994, 1995];
/* We begin with an existing array */

const ages = [];
/* Next, we will create an empty array which we will fill in with the loop */

for (let i = 0; i < birthYears.length; i++) {
  ages.push(2022 - birthYears[i]);
  /* We then add the end of the ages array the result between the current year minus the birthyear */
  /* This will loop for every year and fill in the new array with the results */
}

console.log(ages);

// Continue and Break Statements

// Continue Statement
// This is used to exit the current iteration of a loop and continue with the next one

for (let i = 0; i < andres.length; i++) {
  if (typeof andres[i] !== "string") continue;
  /* Using the continue statement in this loop will only log strings */
  /* It will completely skip any element that is not a string */
  console.log(andres[i]);
}

// Break Statement
// This is used to immediately terminate the loop

for (let i = 0; i < andres.length; i++) {
  if (typeof andres[i] === "object") break;
  /* Using the break statement in this loop will log whatever elements it can loop before finding an object */
  /* Once it has found an object, it will immediately stop */
  console.log(andres[i]);
}
