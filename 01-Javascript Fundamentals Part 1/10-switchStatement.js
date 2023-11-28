// The Switch Statement
// This is an alternative way of writing an if/else statements
//It's used mainly to compare one value to multiple different options
//Example:

let day = 'Tuesday';

switch (day) { // The value inside the parenthesis is what we will be comparing
    case 'Monday': // This is the same as writing day === 'Monday', thus, if true, will execute the code followed by the colon
        console.log('Plan course structure.');
        console.log('Go to coding meetup.');
        break; // A break is necessary for the code to know when to stop. It will continue running everything until it finds one
    case 'Tuesday':
        console.log('Prepare theory videos.');
        break;
    case 'Wednesday':
    case 'Thursday': //By placing a case right after another one, the code following the last case will execute for all of them
        console.log('Write code examples.'); //This will execute for both 'Wednesday' and 'Thursday'
        break;
    case 'Friday':
        console.log('Record videos.');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend.');
        break;
    default: // Default will run if all other options fail to run. It is the equivalent of the last 'else' statement in an if/else statement
        console.log('Not a valid day.');
};

// As a comparison, here is the same code as an if/else statement

if (day === 'Monday') {
    console.log('Plan course structure.');
    console.log('Go to coding meetup.');
} else if (day === 'Tuesday') {
    console.log('Prepare theory videos.');
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log('Write code examples.');
} else if (day === 'Friday') {
    console.log('Record videos.');
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend.');
} else {
    console.log('Not a valid day.');
};