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
// OPTION 1
const positiveSum = arr => arr.filter(el => el > 0).reduce((a, b) => a + b, 0);


// OPTION 2
const positiveSum2 = arr => {
    const positives = []
    let result = 0;

    for (const el of arr) {
        if (el > 0) {
            positives.push(el);
        }
    }

    for (const num of positives) {
        result += num;
    }
    return result;
}


// OPTION 3
const positiveSum3 = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}


// ✅ Checking
console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));

console.log(positiveSum2([1, 2, 3, 4, 5]));
console.log(positiveSum2([1, -2, 3, 4, 5]));
console.log(positiveSum2([]));
console.log(positiveSum2([-1, -2, -3, -4, -5]));
console.log(positiveSum2([-1, 2, 3, 4, -5]));

console.log(positiveSum3([1, 2, 3, 4, 5]));
console.log(positiveSum3([1, -2, 3, 4, 5]));
console.log(positiveSum3([]));
console.log(positiveSum3([-1, -2, -3, -4, -5]));
console.log(positiveSum3([-1, 2, 3, 4, -5]));