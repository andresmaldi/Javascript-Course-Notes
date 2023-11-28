// Scope and the Scope chain

// Scoping
// Scoping controls how the prograrm's variables are organized and accessed.

// Lexical Scoping:
// Scoping is controlled by the placement of function and block in the code.

// Scope
// Space or environment in which a certain variable is declared.
// There is a global scope, a function scope, and a block scope.

// Scope of a variable
// The region of code where a certain variable can be accessed.

// Global Scope
// This is for top-level code
// Any variable that is outside any function or block

// Function Scope
// Variables that are only accessible inside a function, NOT outisde
// Also called local scope

// Block Scope
// Variables that are only accessible inside a block (a block is determined as code between two curly braces)
// IMPORTANT!! ONLY APPLIES TO let AND const VARIABLES
// Functions are also block scoped, but only in strict mode

// The Scope Chain
// Scopes have access to all variables outside in all outer scopes
// The reverse, however, is not true. Scopes don't have access to variable in inner scopes
// Example:

const myName = "Andres";

function first() {
  // This function has access to te variable myName, but not to the variable job
  const age = 27;

  if (age >= 30) {
    const decade = 2;
    var millenial = true;
    // Const and let variables are block-scoped, so not accessible by their outer scopes
    // However, var variables are function-scoped, so they are scoped to an outer-level function
  }

  function second() {
    const job = "programmer";
    console.log(`${myName} is a ${age}-year old ${job}.`);
    // This function has access to all variables in outside scopes,
    // such as myName and age.
  }

  second();
}

first();
