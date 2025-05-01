// ❓DESCRIPTION
// Julie is x years older than her brother, and she is also y times as old as him.
//
// Given x and y, create a function calculating Julie's age.
//
// For example:
// x: 6
// y: 3
// output: 9
//
// Note also that x can be negative, and y can be a decimal.
// x: -15,
// y: 0.25
// output: 5
//
// That is, Julie is 15 years younger and 0.25 times the age of her brother.
//
// Do not concern yourself with the imperfections inherent in dividing by floating point numbers, as your answer will have a tolerance of 1e-9. Also, for the sake of simplicity, Julie is never the same age as her brother.


// ⚙️ TESTS
// const { assert } = require("chai");
//
// describe("Calculate Julie's age", function() {
//
//   it("Fixed tests", function() {
//     tester(6, 3, 9);
//     tester(-15, 0.25, 5);
//   });
//
//   const tester = (x, y, expected) => {
//     const tolerance = 1e-9;
//     const actual = age(x, y);
//     assert.approximately(actual, expected, tolerance, `Failed for inputs:\n- x: ${x}\n- y: ${y}\n`);
//   }
// });


// ✅ SOLUTION
export const age = (x: number, y: number): number => (x * y) / (y - 1) || 0;