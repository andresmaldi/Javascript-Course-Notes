// 7 Primitive Data Types

// Number = decimals and integers

let age = 28;

// String = sequence of characters normally used for text

let name = "Brad";

// Boolean = logical type that can only be true or false

let fullAge = true;

// undefined = value taken by a variable that is not yet defined

let children

// Null = also means "empty value"

// Symbol = value that is unique or cannot be changed

// BigInt = larger integers that the Number type cannot hold

// Javascript has dynamic typing = Manually defining the data type of the value stored is not necessary.

// typeof = Operator that shows what kind of data type is a variable

let javaScriptIsFun = true;
typeof javaScriptIsFun /* would be Boolean */

let childrenAge = 5;
typeof childrenAge /* would be Number */

// You can reassign any variable even after declaring it, as long as you don't declare it again

let musicIsGood = true;
musicIsGood = "Music is indeed good!"; /* In this case, the variable musicIsGood would be changed from a Boolean to a String */

// If a variable is left empty, it will return Undefined as well as it data type will be Undefined

let year /* This would be undefined both in value and type */

// Declaring variables with let, const and var
// Let and const are new, var is the old version of declaring variables.
// Let allows a variable to be changed in the future.
// Const will not allow a variable to be changed in the future.

let happy = true;
happy = false; /* the variable happy would be reassigned from true to false */

const sad = true;
sad = false; /* the variable sad would not be reassigned from true to false */
/* When using const to declare variables, it should always have a value, unlike let. */

// var works like let in that it can be reassigned in the future, but it isn't and shouldn't be used nowadays.

var birthYear = 1994;
birthYear = 2001; /* this would reassign the variable birthYear from 1994 to 2001 */



