// ❓DESCRIPTION
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


// ⚙️ TESTS
// assert.strictEqual(grow([1, 2, 3]), 6);
// assert.strictEqual(grow([4, 1, 1, 1, 4]), 16);
// assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64);


// ✅ SOLUTION
// OPTION 1
function grow(x){
    let sum = 1;
    for (let i = 0; i < x.length; i++) {
        sum *= x[i];
    }
    return sum;
}


// OPTION 2
function grow(x) {
    return x.reduce((accumulator, currentVal) => accumulator * currentVal, 1);
}


// OPTION 3
const growX = x => x.reduce((accumulator, currentVal) => accumulator * currentVal, 1);


// ✅ Checking
const result = grow([1, 2, 3, 4]);
console.log(result);