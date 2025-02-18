// ❓DESCRIPTION
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//
// Additionally, if the number is negative, return 0.
//
// Note: If the number is a multiple of both 3 and 5, only count it once.


// ⚙️ TESTS
// import solution = require('./solution');
// import {assert} from "chai";
//
// function test(num: number, expected: number) {
//     assert.strictEqual(solution.Challenge.solution(num), expected)
// }
//
// describe("solution", function(){
//     it("should handle basic tests", function() {
//         test(10, 23);
//     });
// });


// ✅ SOLUTION
export function strictEqual (num: number) {
    if (num === 0) return 0;

    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

// ✅ Checking
console.log(strictEqual(10), '--- 23')