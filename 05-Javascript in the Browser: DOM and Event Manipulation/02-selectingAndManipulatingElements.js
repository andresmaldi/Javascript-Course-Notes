// Selecting and Manipulating Elements
// There are multiple ways of selecting elements in an html document

// querySelector Method
// Using this method, we can choose an element, be it a general element, a class or an id
// Example:

document.querySelector(".test1").textContent = "Changing text 1";
/* With the textContent property, we can change the text of a text element */
/* With this, we have succesfully changed the text of the h1 element with the class of "test1" */

// These elements can also be logged onto the Javascript console in case they need to be checked

console.log(document.querySelector(".test1").textContent);
