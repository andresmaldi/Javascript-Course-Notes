// Looping Arrays forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// It is possible, of course, to loop over this array using a For Of loop. It would look something like this:

console.log(`--- FOR OF LOOP ---`);

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

// However, it is also possible to use a forEach loop

console.log(`--- FOREACH LOOP ---`);

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

// The difference between these two is that the forEach loop will always loop over the complete array, while the for of loop will loop over what you want.
