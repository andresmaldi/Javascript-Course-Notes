// Default Parameters
// Sometimes it's useful to have functions where some parameters are set by default

const bookings = [];

// A way of assigning default values to these parameters is by assigning them directly to the parameters of the function:

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // Another way of creating assigning these default values is by doing it the old way. By assigning them with an OR (||) operand:
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// These values will be assigned if nothing is passed as an argument for the parameter:
createBooking("LH123");

// But they will be, of course, overwritten if they are filled as arguments:
createBooking("LH123", 2, 800);

// A default value can also be any kind of operation possible in Javascript. For example, the default price can be calculated based on the number of passengers. However, this only works if a parameter is after another one already defined.

createBooking("LH123", 2); /* This will ve twice the default price */
createBooking("LH123", 3); /* This will be three times the default price */

// Finally, with default values, it is not possible to skip parameters since they go in order. For example, it is impossible to skip the number of passengers to go directly to the price, like this:

createBooking("LH123", 1000);
// This will inmediately set the number of passengers to 1000, instead of the price. But it is possible to "skip" it. We simply have to set the parameter to "underfined", since it will then apply the default value.

createBooking("LH123", undefined, 1000);
