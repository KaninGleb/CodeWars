// ❓DESCRIPTION
// In this Kata, you will implement a function count that takes an integer and returns the number of digits in factorial(n).
//
// For example, count(5) = 3, because 5! = 120, and 120 has 3 digits.
//
// More examples in the test cases.
//
// Brute force is not possible. A little research will go a long way, as this is a well known series.


// ⚙️ TESTS
// const { assert } = require('chai');
// const _ = require('lodash');
//
// describe("Basic tests", function() {
//
//   function test_it(input, expected) {
//     it(`should return ${expected} for n=${input}`, function() {
//       assert.strictEqual(count(input), expected, `count(${input}) should return ${expected}`);
//     });
//   }
//
//   test_it(    5,      3);
//   test_it(   50,     65);
//   test_it(  500,   1135);
//   test_it( 5000,  16326);
//   test_it(50000, 213237);
//
//   test_it(  500000,   2632342);
//   test_it( 5000000,  31323382);
//   test_it(50000000, 363233781);
// });


// ✅ SOLUTION
// Factorial length
export const factorialLength = (n: number): number => {
  if (n === 0) return 1;

  let factorial  = 1;

  for (let i = 1; i <= n; i++) {
    factorial  *= i;
  }
  return factorial.toString().length;
}


// Factorial length with log10
export const count = (n: number): number => {
  if (n === 0) return 1;

  let digits = 0;

  for (let i = 1; i <= n; i++) {
    digits += Math.log10(i);
  }

  return Math.floor(digits) + 1;
}