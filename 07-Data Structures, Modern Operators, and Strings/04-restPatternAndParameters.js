// REST Pattern and Parameters
// The rest pattern serves the opposite function of the spread operator, it "packs" values into an iterable
// The rest operator is the same as the spread operator, denoted with three dots

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// As you can see, after destructuring, the REST pattern will take the rest of the array values and make a new array with them

// IMPORTANT!! A big difference between the SPREAD operator and the REST pattern is that REST is always done in the left side of the operation while SPREAD is on the right

// Both REST and SPREAD can be used in the same operation

const anime = {
  action: ["Naruto", "Dragon Ball", "Shaman King"],
  romance: ["To Love Ru", "Your Name"],
  companyRatings: {
    Ghibli: "good",
    ToeiAnimation: "good",
    MadHouse: "good",
  },
  yearsActive: {
    Ghibli: 1970,
    ToeiAnimation: 1990,
    MadHouse: 2003,
  },
  moviesProduced: {
    Ghibli: 20,
    ToeiAnimation: 55,
    MadHouse: 18,
  },
};

const [naruto, , shamanKing, ...otherAnime] = [
  ...anime.action,
  ...anime.romance,
];
console.log(naruto, shamanKing, otherAnime);
// This will, however, not include any skipped elements, such as the "Dragon Ball" element in this example
// This is because the REST pattern will always "pack" all the rest of the elements
// Because of this, the REST pattern must always be the last, otherwise an error will occur.

// Objects
// The REST pattern also works with objects, much in the same way
// However, it does not have the limitation of only "packing" the elements from the last element picked
// It will "pack" all the remaining elements, regardless of position.

const { companyRatings, ...otherStats } = anime;
console.log(companyRatings, otherStats);

// Functions
// The REST pattern can also be used in a function, it is however, called a REST Parameter in that case

const add = function (...numbers) {
  console.log(numbers);
  /* Here, we are creating arrays based on the arguments passed when the function is called thanks to the REST parameter */

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
  /* Here, we are looping over the array that is created in order to sum every number in the respective array */
};

add(2, 3);
add(5, 4, 7, 1);
add(1, 5, 4, 8, 9, 3, 4, 5, 9, 2, 3, 4);

// This can be applied even on existing arrays.
// For example, if we had an array with three numbers in it, we could simply use the SPREAD operator to unpack it already as an argument in the function

const x = [23, 5, 7];
add(...x);
