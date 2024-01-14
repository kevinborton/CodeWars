/* PROBLEM STATEMENT:::  Convert a Number to a String!

We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript

function numberToString(num) {
  // Return a string of the number here!
}

*/


// SOLUTION

function numberToString(num) {
    return num.toString();
}

/* SAMPLE TESTS:::

const assert = require('chai').assert;
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(numberToString(67), '67');
  });
});


*/