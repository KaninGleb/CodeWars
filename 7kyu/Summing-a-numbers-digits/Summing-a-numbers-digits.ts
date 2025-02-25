// ❓DESCRIPTION
// Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
//
// For example: (Input --> Output)
// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.


// ⚙️ TESTS
// assert.equal(sumDigits(10), 1);
// assert.equal(sumDigits(99), 18);
// assert.equal(sumDigits(-32), 5);


// ✅ SOLUTION
export function sumDigits(n: number): number {
    return Math.abs(n)
        .toString()
        .split('')
        .reduce((a, b) => a + +b, 0);
}