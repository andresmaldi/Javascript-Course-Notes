// Looping Backwards and Loops in Loops
// Looping backwards is a somewhat important part of Javascript
// Let's begin with an array:

const friends = ["Michael", "Steven", "Peter"];

// To loop backwards, we will use a For Loop and make it read the array from the last element to the first
// Example:

for (i = friends.length - 1; i >= 0; i--) {
  /* We begin with the length of the array minus 1 to start with the last element, 
    we will loop until the loop hits 0 (in this case, the index 0 or first element of the array), 
    and finally, we will decrease by one every time we loop  */
  console.log(friends[i]);
}

// Loops in Loops
// It is possible to include a loop within a loop
// In this case, the loop within the loop will finish looping before the next iteration of the main loop continues
// Example:

for (let exercise = 1; exercise < 4; exercise++) {
  /* This loop will run 3 times */
  console.log(`Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    /* This loop will run 5 times for each of the 3 loops in which it is inside */
    console.log(`Lifting weight repetition ${rep}`);
  }
}
