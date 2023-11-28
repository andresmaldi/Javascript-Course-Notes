// Strict Mode
// This is a special mode used to write more secure Javascript code
// To use it we simply use the following statement

'use strict';

// This should be the first line of code. If there is anything before it, strict mode won't activate
// Strict mode will highlight some errors that would otherwise not become visible
// Example:

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; //Here we have an error we are making on purpose (the variable is missing an s)
if (hasDriversLicense) console.log('I can drive.');

// If strict mode is not activated, Javascript won't show us the error
// In this case, it should show us an error: 'hasDriverLicense is not defined'

// Strict Mode also introduces a shortlist of variable names that are reserved for features that might be added later on, thus rendering them unusable
// Example:

const interface = 'Audio';
// Javascript is reserving the word interface for a future feature, thus it will give us an error (only if strict mode is activated)
