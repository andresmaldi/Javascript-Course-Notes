// The Call and Apply Methods

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

lufthansa.book(239, "Andres");
lufthansa.book(635, "Mike Smith");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// The .call() Method
// The .call() method allows us to call a function where the first argument passed will be the "this" keyword
// After the first argument, all other arguments called are simply the arguments of the original function being called with the call() method

book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "James");
console.log(lufthansa);

// The .apply() Method
// The .apply() method is essentially the same as the .call() method, except it doesn't receive a list of arguments after the first one (the "this" keyword). Instead, it receives an array of the arguments

const flightData = [583, "George Cooper"];
book.apply(eurowings, flightData);
console.log(eurowings);

// The .apply() method is, however, not used as much nowadays due to the spread operator (...) which helps separate an array, achieving the same result.

book.call(eurowings, ...flightData);
