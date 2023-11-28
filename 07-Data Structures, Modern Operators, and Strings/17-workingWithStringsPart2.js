// Working with String - Part 2

const airline = "TAP Air Portugal";

// Other methods that can be used on strings are ones about case.

// toLowerCase() Method
// With this method, we can turn a string into all lowercase. It will not modify the original string.

console.log(airline.toLowerCase());

// toUpperCase() Method
// With this method, we can do the exact opposite. We can make everything into uppercase. Again, it will not modify the original string.

console.log(airline.toUpperCase());

// .trim() Method

// .replace() Method

// .includes() Method

// Chaining Methods

// Example 1

const passenger = "jOnAs";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Example 2

const email = "hello@jonas.io";
const logInEmail = "  Hello@Jonas.Io ";

const lowerEmail = logInEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = logInEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Example 3

const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");

console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replaceAll("door", "gate"));

// Booleans

const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));
console.log(plane.startsWith("Aib"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the new Airbus family.");
}

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board.");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food, and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");
