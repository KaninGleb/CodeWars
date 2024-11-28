// ❓DESCRIPTION
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.


// ⚙️ TESTS
// assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
// assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
// assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
// assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
// assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
// assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);


// ✅ SOLUTION
const findUniq = arr => {
    const numCount = {};

    arr.forEach(num => {
        numCount[num] = (numCount[num] || 0) + 1;
    })

    for (const key in numCount) {
        if (numCount[key] === 1) {
            return Number(key);
        }
    }
}


// ✅ Checking
console.log(findUniq([ 1, 0, 0 ]));
console.log(findUniq([ 0, 1, 0 ]));
console.log(findUniq([ 0, 0, 1 ]));
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 3, 10, 3, 3, 3 ]));