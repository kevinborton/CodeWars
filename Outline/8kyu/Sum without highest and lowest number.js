/* PROBLEM STATEMENT:::  Sum without highest and lowest number

https://www.codewars.com/kata/576b93db1129fcf2200001e6

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

function sumArray(array) {

}

*/


// SOLUTION

function sumArray(array) {
    // Input validation: check if array is null, undefined, or has less than 3 elements
    if (!array || array.length <= 2) {
        return 0;
    }

    // Sort the array in ascending order
    array.sort((a, b) => a - b);

    // Remove the first and last elements (lowest and highest) and sum the rest
    return array.slice(1, -1).reduce((acc, val) => acc + val, 0);
}

/* SAMPLE TESTS:::

const {assert} = require("chai");

it("example tests", ()=>{
  assert.strictEqual( sumArray(null)                     , 0 );
  assert.strictEqual( sumArray([ ])                      , 0 );
  assert.strictEqual( sumArray([ 3 ])                    , 0 );
  assert.strictEqual( sumArray([ 3, 5 ])                 , 0 );
  assert.strictEqual( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
  assert.strictEqual( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
  assert.strictEqual( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
  assert.strictEqual( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );
});


*/