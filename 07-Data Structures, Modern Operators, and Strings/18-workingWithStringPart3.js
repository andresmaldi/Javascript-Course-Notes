// Working with String - Part 3

// .split() Method
// The .split() method divides a string into multiple string, separating them through whatever is passed in the method.

console.log("a+very+nice+string".split("+"));
// This divides the string on each "+" sign it finds

console.log("Andres Maldonado".split(" "));
// This divides the string in every space it finds

// It can, of course, be deconstructed, as well

const [firstName, lastName] = "Andres Maldonado".split(" ");
console.log(firstName, lastName);

// .join() Method
// This works in the opposite way of the .split() Method. It joins two or more strings with a specified character or characters.

const newName = ["Mr.", firstName, lastName].join(" ");
// These strings will be joined with a space character
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    /* A different option would be to use the .replace() method:
    
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()))*/
  }

  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith david");

// Padding
// Padding a string means adding a number of characters to a string until it has a certain desired length.

// .padStart() Method
// With this method we are adding characters to the beginning of the string
// The first argument is the desired length for the string AFTER the padding.
// The second argument is the character we want to pad with.

const message = "Go to gate 23!";
console.log(message.padStart(25, "+"));

// .padEnd() Method
// Works the same as .padStart(), but adding the desired characters to the end of the string

console.log(message.padEnd(25, "+"));

// They can, of course, be used in conjunction

console.log(message.padStart(25, "+").padEnd(30, "+"));

// A real-life application of this methods would be the masking of a credit card's numbers on a website

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(45093403489342));
console.log(maskCreditCard("234234234234234"));

// .repeat() Method
// With this method, we simply repeat the same string multiple times
// As an argument, we pass in the number of times we want the string to be repeated

const message2 = "Bad weather... All departures delayed... ";

console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛩".repeat(n)}.`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
