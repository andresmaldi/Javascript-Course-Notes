// How Passing Arguments Work: Value vs. Reference

const flight = "LH234";
const andres = {
  name: "Andres Maldonado",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24739479284) {
    console.log("Checked in");
  } else {
    console.log("Wrong passport");
  }
};

checkIn(flight, andres);
console.log(flight);
console.log(andres);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(andres);
checkIn(flight, andres);
