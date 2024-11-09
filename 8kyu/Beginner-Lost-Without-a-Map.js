// ❓DESCRIPTION
// Given an array of integers, return a new array with each value doubled.

// For example:
// [1, 2, 3] --> [2, 4, 6]


// ⚙️ TESTS
// assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
// assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
// assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 


// ✅ SOLUTION
// OPTION 1
function maps (x) {
    let result = [];
    for (let i = 0; i < x.length; i++) {
        result.push(x[i] * 2);
    }
    return result;
}


// OPTION 2
function maps (x) {
    return x.map(item => item * 2);
}


// OPTION 3
const maps = x => x.map(item => item * 2);


// ✅ Checking
console.log(maps([1, 2, 3]));
console.log(maps([4, 1, 1, 1, 4])); 
console.log(maps([2, 2, 2, 2, 2, 2])); 