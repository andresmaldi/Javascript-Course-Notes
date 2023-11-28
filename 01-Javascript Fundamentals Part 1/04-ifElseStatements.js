// If and Else Statements
// If and Else Statements are used to make decisions within a code
// For example, if we want to write a program of whether a person can take a driver's test or not we can use and IF/ELSE statement

// Let's make an IF/ELSE statement.
// For and IF statement we first write 'if' followed by a parenthesis.
// Inside the parenthesis we will include the condition

// Then, we include the code we want to run IF the condition is met.
// The condition is usually a boolean (either true or false)
// Here is an example:

const sarahAge = 19;

if (sarahAge >= 18) {
    console.log("Sarah can start driving lessons. ☺️")
};

// In this case, the code runs because the condition is met.
// However, there is also the ELSE statement.
// Else statements work if the initial condition is not met.
// Here is an example:

const paulaAge = 12;

if (paulaAge >= 18) {
    console.log("Paula can start driving lessons. ☺️")
} else {
    const yearsLeft = 18 - paulaAge;
    console.log(`Paula is still too young to take a driving lesson. Please wait another ${yearsLeft} years.`)
};

// IMPORTANT!! 
// Any variables created inside a code block (such as an IF and ELSE code structure) will not be accessible outside of that code block.
// The variable century would not be accessible outside of the if/else code structure
// To prevent this from breaking the script, you can simply create the variable outside the structure and leave it empty
// It will then be modified inside the if/else structure but still remain accessible outside it


let birthYear = 1980;
let century; /* create the variable but leave it empty */

if (birthYear <= 2000) {
    century = 20; /* the variable is then modified inside the structure and still remain accessible outside */
} else {
    century = 21;
};

console.log(century) /* If century wasn't an already existing variable, this would show us an error */

// You can also chain several conditions in one same If/else block
// To do this, we can use if/else/if
// Example:

birthyear = 1899; /* You can change this to whatever year you want to test the following If/else/if block */

if (birthyear >= 2000) {
    console.log("You were born in the 21st century.");
} else if (birthyear >= 1900) {
    console.log("You were born in the 20th century.");
} else {
    console.log("You should be dead.");
};

