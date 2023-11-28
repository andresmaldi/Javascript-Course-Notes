// Logical Assignment Operators
// These are assignment operators that were introduced in ES 2021

const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// The first logical Assignment Operator is the OR Assignment Operator
// It works by compressing a bit the OR operator short-circuiting

rest1.numGuests = rest1.numGuests || 10;
/* this would be the same as: */
rest1.numGuests ||= 10;

rest2.numGuests = rest2.numGuests || 10;
/* this would be the same as: */
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);

// the second one is the Nullish Assignment Operator
// It works just like the nullish coalescing operator.

rest1.numGuests = 0;

rest1.numGuests = rest1.numGuests ?? 10;
/* This is the same as this: */
rest1.numGuest ??= 10;

// The third one is the AND Assignment Operator

rest2.owner = rest2.owner && "<ANONYMOUS>";
/* This is the same as this: */
rest2.owner &&= "<ANONYMOUS>";
