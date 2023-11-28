// Maps: Iteration

// Another way of writing Maps is using an array of arrays when naming the variable.

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct!"],
  [false, "Try again"],
]);

console.log(question);

// The result of this is similar to calling Object.entries(), thus it is easy to convert from an Object into a Map.

const restaurant = {
  openingHours: {
    tue: {
      open: 11,
      close: 9,
    },
    wed: {
      open: 8,
      close: 10,
    },
  },
};

console.log(Object.entries(restaurant.openingHours));

// To convert it, we use the following:

const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// Maps are also iterables, so looping over them is possible.

console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}.`);
}

const answer = Number(prompt("Your answer"));
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// Maps can also be converted into arrays by simply destructuring them

console.log([...question]);

// Finally, Maps also have their own methods, such as .entries(), .keys(), and .values().

console.log(question.entries());
console.log(question.keys());
console.log(question.values());

// However, to truly get the values, it is necessary to destructure them. Otherwise, a MapIterator will be returned instead.

console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
