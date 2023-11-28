// The Bind Method

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}.`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// The .bind() Method
// This method works just like the .call() method, except it also "binds" the function to the "this" keyword being used, creating a new function

const bookEW = book.bind(eurowings);
// This creates a new function which we store in a variable, and which we can use afterwards, getting the same result as if using the .call() method

bookEW(23, "Steven");
console.log(bookEW);

// The .bind() method can also be used to define the rest of the arguments without having to rewrite them later. For example, in this flights example, we can define the flight number and bind it to the function created

const bookEW23 = book.bind(eurowings, 23);
bookEW23("James");

// The .bind() method is very useful in many situations. One of these is, specifically, when using Event Listeners.

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);
// By adding an event listener to the button with the buyPlane() function, we are dynamically setting the "this" keyword to the button itself.

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
// To manually define the "this" keyword in this event listener we can use the .bind() method, which will return a new function.

// Partial application
// Another use case of the .bind() method is when we just want to preset some values, not caring about the "this" keyword. An example would be this:

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// Now, we want to use the same calculation with a prefixed rate. Thus, we can leave out the "this" keyword by simply typing "null", and then continuing by typing the values.

const addVAT = addTax.bind(null, 0.23);
/* This would be the same as writing this:
const addTax = value => value + value * 0.23 */
console.log(addVAT(100));
