// forEach With Maps and Sets

//Maps

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

// ForEach can also be used on Maps. To do so we need to apply three different parameters

//The first is the value

// Te second is one will be the key

//And the third one is the entire map that is being looped over

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Sets
// Looping with forEach is also possible, however, in Sets the value and the key are exactly the same and since the number of parameters cannot change for a given method, we still have to apply it.

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);

console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
