// Debuggin in the Console and Opening Points
// Let's create a bug within a code

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: prompt("Degrees celsius:"),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

// This code will work but it will give us an incorrect answer
// REMINDER: COME UP WITH A BETTER EXAMPLE OF FIXING A BUG
