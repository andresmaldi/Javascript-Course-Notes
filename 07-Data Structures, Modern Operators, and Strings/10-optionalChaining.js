// Optional Chaining (?.)
// This is a new feature for objects and arrays.
// With optional chaining, we can check whether a property exists or not.
// If it doesn't, undefined will be returned inmediately, avoiding any type of error that could stop the code.

const days = ["mon", "tue", "wed", "thu", "fri"];

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
  order(ing) {
    console.log(`You have chosen ${ing} as your main ingredient`);
  },
};

// With optional chaining, javascript will return a property only if the one before it exists
// In this example, the property .open will only be returned if .tue exists, avoiding errors.
// By exists, we are talking about anything that is not a nullish value (null or undefined)

// This one exists, so it will be returned
console.log(restaurant.openingHours.tue?.open);

// This one, since .mon doesn't exist, but we are using optional chaining, will return undefined

console.log(restaurant.openingHours.mon?.open);

// If we didn't use optional chaining, it would return an error.
// console.log(restaurant.openingHours.mon.open);

// Multiple optional chainings can be used as well.

console.log(restaurant?.openingHours?.fri?.close);

// We can also loop using optional chaining.

for (day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day} we open at ${open}.`);
}

// With optional chaining, we can also check if methods exist

restaurant.order?.("Chili"); /* This one exists, so it will be logged. */

console.log(
  restaurant.orderPizza?.("Chili")
) /* this one doesn't so it will be undefined. */;

// Optional Chaining also works on arrays

const users = [
  {
    name: "Andres",
    email: "andres@gmail.com",
  },
];

console.log(users[0]?.name ?? "User array empty.");
/* This one exists, so it will be returned */

console.log(users[1]?.name ?? "User array empty.");
/* This one doesn't, so it will be undefined. 
Thanks to the Nullish Coalescing Operator, the string on the right will be returned instead*/
