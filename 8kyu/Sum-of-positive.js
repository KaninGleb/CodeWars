// ❓DESCRIPTION
// Task:
// You get an array of numbers, return the sum of all of the positives ones.
// Example:
// [1, -4, 7, 12] => 1 + 7 + 12 = 20
// Note:
// If there is nothing to sum, the sum is default to 0.


// ⚙️ TESTS
// assert.strictEqual(positiveSum([1,2,3,4,5]),15);
// assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
// assert.strictEqual(positiveSum([]),0);
// assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
// assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);


// ✅ SOLUTION
const positiveSum = arr => arr.filter(el => el > 0).reduce((a, b) => a + b, 0);


// ✅ Checking
console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));