// Working with Strings - Part 1
// This is a quick review and explanation of everything we can do with strings.

const airline = "TAP Air Portugal";
const plane = "A320";

// In strings, specific characters can be called the same way we call an item in an array. Using brackets and the index. It can be done using a variable or directly with a string.

console.log(plane[0]);
console.log("B727"[0]);

// There is also a .length property, just like in arrays, as well.

console.log(airline.length);
console.log("B727".length);

// Strings also have methods, just like arrays. Some of these are:

// indexOf() Method
// This is used to determine the position in which the first element is.

console.log(airline.indexOf("r"));

// It can also be used to look for entire words, returning the index where the word begins.
// IMPORTANT!! indexOf() is a case sensitive method.

console.log(airline.indexOf("Portugal"));

// lastIndexOf() Method
// This works just like indexOf(), but it will return the last one found in the string.

console.log(airline.lastIndexOf("r"));

// .slice() Method
// Using this method, we can "cut" a string. The result of this is called a substring.
// It is possible to pass two parameters, a "begin" parameter (which is included in the new string) and an "end" parameter (which is not included in the new string).
// IMPORTANT!! This will not modify the already existing string.

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

// All of these can be used to extract words from a string.
// For example, if we wish to extract the very first word of a string, we might use the .slice() method, beginning with the first index and stopping in the very first space we find, using the .indexOf() method.

console.log(airline.slice(0, airline.indexOf(" ")));

// If we wish to extract the last word, we could simply slice the string from the very last space there is.

console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// It is also possible to determine a begin or end point for slice using negative values. This will read the string backwards.

console.log(airline.slice(-2));

// If we extract it using a positive value and then a negative value, we can extract a middle part of the string as well.

console.log(airline.slice(1, -1));

// By applying everything in this lesson, we can create a function that checks whether or not you have a middle seat or not. To do so, we must check the last element of a string to see whether it is a B or an E (middle seats in small commercial airlines) or not.

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat!");
  else console.log("Yuo got lucky.");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
