// Execution Context and the Call Stack
// After compiling the code, comes the execution

// Execution
// First is the creation of the Global Execution Context (for top level code)
// This is all the code that is not inside a function
// Then, the execution of top-level code
// Finally, the execution of function and waiting for callbacks.

// Execution Context
// Environment in which a piece of Javascript is executed.
// Stores all the necessary information for some code to be executed.

// What's Inside the Execution Context
// 1. Variable environmente: All variables are stored here, as well as functions and arguments objects
// 2. Scope Chain: Basically it is references to variables located outside of a function.
// 3. This Keyword
// All of these are are generated during the "creation phase", before the execution.

// Call Stack
// "Place" where execution contexts get stacked on top of each other, to keep track of where we are in the execution
