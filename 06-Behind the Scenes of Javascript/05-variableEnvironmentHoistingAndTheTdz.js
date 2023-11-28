// Variable Environment: Hoisting and the TDZ

// Hoisting
// Makes some types of variables accessibles/usable in the code before
// they are actually declared.
// Before execution, code is scanned for variable declaration, and for each
// variable, a new property is created in the variable environment object

// function declarations are hoisted and their initial value will be the actual function
// var variables are hoisted and their initial value will be undefined
// let and const variables are not hoisted, their initial value will be <uninitialized> or TDZ (Temporal Dead Zone)
// function expressions and arrows depend on if they are declared with var or let/const

// TDZ (Temporal Dead Zone)
// It's a region of the scope in which a variable is defined, but is not yet accessible

// Why TDZ?
// Makes it easier to avoid and catch errors:
// accessing variables before declaration is bad practice and should be avoided.
// It also makes const variables actually work

// Why Hoisting?
// It allows the use of functions before actually being declared
// var hoisting is just a byproduct
