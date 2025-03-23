// ❓DESCRIPTION
// Write a function called findUnique which returns the only unique number from an array.
//
// All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.
//
// Example
// Input:
//
// [ 1, 8, 4, 4, 6, 1, 8 ]
// Expected output:


// ⚙️ TESTS
// assert.strictEqual(findUnique([1, 8, 4, 4, 6, 1, 8]), 6);
// assert.strictEqual(findUnique([ 1234567 ]), 1234567);
// assert.strictEqual(findUnique([ 1, 4, 4, 5, 5, 3, 3, 2, 2 ]), 1);
// assert.strictEqual(findUnique([ 2, 2, 5, 5, 4, 3, 3, 1, 1 ]), 4);
// assert.strictEqual(findUnique([ 3, 5, 5, 4, 4, 3, 2, 2, 9 ]), 9);


// ✅ SOLUTION
export const findUnique = (nums: Array<number>): number => {
    let unique: number = 0;

    for (const num of nums) {
        unique ^= num;
    }
    return unique;
}