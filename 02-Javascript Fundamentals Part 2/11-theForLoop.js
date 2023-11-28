// For Loops
// Loops in Javascript serve the function of repeating a code multiple times without the need of writing it over and over
// This is what we want to avoid:

console.log("Lifting weights repetition 1");
console.log("Lifting weights repetition 2");
console.log("Lifting weights repetition 3");
console.log("Lifting weights repetition 4");
console.log("Lifting weights repetition 5");
console.log("Lifting weights repetition 6");
console.log("Lifting weights repetition 7");
console.log("Lifting weights repetition 8");
console.log("Lifting weights repetition 9");
console.log("Lifting weights repetition 10");

// With a loop, we can repeat this code until we want it to stop
// A For Loop has three parts, all separated by a semicolon
// The first is the beginning counter, where you wish to start the loop
// Next, we write where we wish the loop to stop. This is important, since the code will keep running while the condition is true
// Finally, we write the increment we wish for the loop

for (let rep = 1; rep <= 10; rep++) {
  /* The loop will begin at 1, stop when it hits 10 and increase by one */
  console.log(`Lifting weights repetition ${rep}.`);
}

// Here's another example:

for (let rep = 2; rep <= 20; rep = rep + 2) {
  /* The loop will begin at 2, stop when it hits 20 and increase by two */
  console.log(`Lifting weights repetition ${rep}.`);
}
