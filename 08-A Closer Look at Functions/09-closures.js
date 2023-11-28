// Closures

// It is important to understand that closures are not used or created manually. They simply happen automatically in certain situations. It's just important to understand those situations.

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

//As seen in the example above, closures make functions remember all the variables that existed in the functions "birthplace", even if they should be able to be accesed anymore, such as the variable "passengerCount"

// A function always has access to the variable environment (VE) of the execution context in which it was created

// A closure, in other terms, is a VE attached to the function, exactly as it was at the time and place the function was created

// Closures can be checked using console.dir in the scope section

console.dir(booker);
