// The Nullish Coalescing Operator (??)
// This operator works the same as the || operator, with an important difference
// As opposed to reading falsy values, it will only read nullish values, which are null and undefined.

console.log(null ?? 23);
/* this will return 23, since null is a nullish value */

console.log(0 ?? 23);
/* this, instead, will return 0, since it not a nullish value */
