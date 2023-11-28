// The This Keyword in Practice

console.log(this); /* Here, this points to the window object */

const calcAge = function (birthYear) {
  /* Here, the this keyword will point to undefined */
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  // Here, the this keyword will point to the window object, since it is pointing at its parent scope because arrow functions do not get a this keyword
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const andres = {
  //   Here, the this keyword will point to the andres object
  year: 1994,
  calcAge: function () {
    console.log(this);
  },
};
andres.calcAge();
