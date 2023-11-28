// More Closures Examples

// Example 1

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

// By calling the function g, we are assigning a function to the empty variable f. By then calling them, we can see the results of the equation defined. We can observe that the closure at this point would be the value of a.
g();
f();
console.dir(f);

// Now, we are reassigning f to a new function within the h function. If we check the scope at this point, we can observe that now the closure has changed to the value of b.
h();
f();
console.dir(f);

// Closures then make sure that a function doesn't lose the connection to the variables that were present at its birthplace

// Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`There are 3 groups, each with ${perGroup} passengers.`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds.`);
};

const perGroup = 1000; // this is in place to show that closures have priority over the scope. If it were the other way around, it would show the number of passengers as 1000 and not 60
boardPassengers(180, 3);

// In this example, the only way in which the callback function of setTimeout could have access to the variables in the boardPassengers function is using closures, which is exactly what is happening.
