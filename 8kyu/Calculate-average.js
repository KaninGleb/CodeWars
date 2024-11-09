// ❓DESCRIPTION
// Write a function which calculates the average of the numbers in a given array.
// Note: Empty arrays should return 0.


// ⚙️ TESTS
// assert.strictEqual(findAverage([1,1,1]), 1);
// assert.strictEqual(findAverage([1,2,3]), 2);
// assert.strictEqual(findAverage([1,2,3,4]), 2.5);


// ✅ SOLUTION
function findAverage(array) {
    if (array.length === 0) {
        return 0;
    } else {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length
    }
}


// ✅ Checking
console.log(findAverage([1, 1, 1]));
console.log(findAverage([1, 2, 3]));
console.log(findAverage([1, 2, 3, 4]));
console.log(findAverage([]));