// ❓DESCRIPTION
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
//
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


// ⚙️ TESTS
// assert.equal(countBits(0), 0);
// assert.equal(countBits(4), 1);
// assert.equal(countBits(7), 3);
// assert.equal(countBits(9), 2);
// assert.equal(countBits(10), 2);


// ✅ SOLUTION
// OPTION 1
export function countBits(n: number): number {
    return n
        .toString(2)
        .split('')
        .map(Number)
        .reduce((a, b) => a + b);
}


// OPTION 2
export function countBits2(n: number): number {
    return n
        .toString(2)
        .split('')
        .filter(n => n === '1').length
}