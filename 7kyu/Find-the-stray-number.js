// ❓DESCRIPTION
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

// Examples:
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


// ⚙️ TESTS
// assert.strictEqual(stray([1, 1, 2]), 2);
// assert.strictEqual(stray([1, 2, 1]), 2);
// assert.strictEqual(stray([2, 1, 1]), 2);


// ✅ SOLUTION
function stray (numbers) {
    let uniqueNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
        uniqueNumber ^= numbers[i];
    }
    return uniqueNumber;
}


// ✅ Checking
console.log(stray([1, 1, 2]));
console.log(stray([1, 2, 1]));
console.log(stray([2, 1, 1]));
console.log(stray([17, 17, 3, 17, 17, 17, 17]));