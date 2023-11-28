// The While Loop
// A While Loop requires only a condition, as opposed to a For Loop

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// This For Loop as a While Loop would look like this:

let rep = 1;

while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

// Another example:

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`You got a 6!`);
}
