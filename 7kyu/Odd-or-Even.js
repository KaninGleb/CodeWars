// ❓DESCRIPTION
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"


// ⚙️ TESTS
// assert.strictEqual(oddOrEven([0]), 'even')
// assert.strictEqual(oddOrEven([1]), 'odd')
// assert.strictEqual(oddOrEven([]), 'even')
// assert.strictEqual(oddOrEven([0, 1, 5]), 'even')
// assert.strictEqual(oddOrEven([0, 1, 3]), 'even')
// assert.strictEqual(oddOrEven([1023, 1, 2]), 'even')
// assert.strictEqual(oddOrEven([0, -1, -5]), 'even')
// assert.strictEqual(oddOrEven([0, -1, -3]), 'even')
// assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even')
// assert.strictEqual(oddOrEven([0, 1, 2]), 'odd')
// assert.strictEqual(oddOrEven([0, 1, 4]), 'odd')
// assert.strictEqual(oddOrEven([1023, 1, 3]), 'odd')
// assert.strictEqual(oddOrEven([0, -1, 2]), 'odd')
// assert.strictEqual(oddOrEven([0, 1, -4]), 'odd')
// assert.strictEqual(oddOrEven([-1023, -1, 3]), 'odd')


// ✅ SOLUTION
// OPTION 1
function oddOrEven (array) {
    const summary = array.reduce((acc, n) => acc + n, 0);
    return summary % 2 ? 'odd' : 'even';
}


// OPTION 2
const oddOrEven = arr => arr.reduce((acc, num) => acc + num, 0) % 2 ? 'odd' : 'even';


// ✅ Checking
console.log(oddOrEven([0]));
console.log(oddOrEven([1]));
console.log(oddOrEven([]));
console.log(oddOrEven([0, 1, 5]));
console.log(oddOrEven([0, 1, 3]));
console.log(oddOrEven([1023, 1, 2]));
console.log(oddOrEven([0, -1, -5]));
console.log(oddOrEven([0, -1, -3]));
console.log(oddOrEven([-1023, 1, -2]));
console.log(oddOrEven([0, 1, 2]));
console.log(oddOrEven([0, 1, 4]));
console.log(oddOrEven([1023, 1, 3]));
console.log(oddOrEven([0, -1, 2]));
console.log(oddOrEven([0, 1, -4]));
console.log(oddOrEven([-1023, -1, 3]));