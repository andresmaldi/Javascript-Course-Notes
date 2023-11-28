// Looping Objects, Object Keys, Values, and Entries
// It is possible to loop over objects (which are not iterable), but in an indirect way

const restaurant = {
  openingHours: {
    tue: {
      open: 11,
      close: 9,
    },
    wed: {
      open: 8,
      close: 10,
    },
  },
};

// First, let's destructure the openingHours property as an object stored in a variable of the same name.

({ openingHours } = restaurant);

console.log(openingHours);

// Property Keys (Names)
// Next, we will use the Object.keys() function.
// This will convert the object into an array, with which we can work.

const properties = Object.keys(openingHours);

console.log(properties);

// With an array, we can, of course, work with any array method

console.log(`We open ${properties.length} days a week.`);

// And we can loop over the object as if it were an array.

for (const day of Object.keys(openingHours)) {
  /* We could replace the Object.keys(openingHours) with the properties variable here */
  console.log(day);
}

// We can use this loop for strings and phrases.

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day},`;
}

console.log(openStr);

// Property Values
// We can also get the values themselves, not just the keys
// For that we use the Object.values() function

const values = Object.values(openingHours);
console.log(values);

// Property Entries
// If we want to get both the keys and the values, we use the Object.entries() function

const entries = Object.entries(openingHours);
console.log(entries);

// We can loop over the entire object by looping over the entry

for (const x of entries) {
  console.log(x);
}

// Finally, we can, of course, destructure all of this when looping over the arrays extracted

for (const [day, { open, close }] of entries) {
  console.log(`On ${day}, we open at ${open} and we close at ${close}.`);
}
