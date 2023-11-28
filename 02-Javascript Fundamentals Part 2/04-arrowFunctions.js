// Arrow Functions
// Arrow functions are a special way of writing functions
// They are used since they are faster to write
// They are called arrow functions since they use an arrow to work '=>'
// Example:

const calcAge = (birthYear) => 2037 - birthYear;

// In an arrow function, return is made implicitly. Everything after the arrow will be returned

const age = calcAge(1994);

console.log(age);

// The return keyword can only be ommitted if the function is a one-line function.
// Otherwise, it is necessary to write it within the function (just like a normal function)
// Example:

const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1994));

// In the previous cases, the function only works with one parameter
// If you want to use more than one, a parenthesis is necessary
// Example:

const yearsUntilRetirement2 = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement2(1994, "Andres"));

// A fundamental difference between function expressions/declarations and arrow functions is that arrow functions don't have a THIS keyword
