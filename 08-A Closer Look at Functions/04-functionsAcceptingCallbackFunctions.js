// Functions Accepting Callback Functions

// First, let's make two functions: one to delete all spaces in a string and another one to make the first word of a string uppercase

const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Now, we can create a higher order function, a function that receives another function inside it

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("Javascript is the best.", upperFirstWord);
/* Remember we only pass the function in, not call it */

transformer("Javascript is the best!", oneWord);

const high5 = function () {
  console.log("Hello");
};
