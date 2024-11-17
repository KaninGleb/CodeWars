// ❓DESCRIPTION
// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


// ⚙️ TESTS
// assert.strictEqual( sumArray(null)                     , 0 );
// assert.strictEqual( sumArray([ ])                      , 0 );
// assert.strictEqual( sumArray([ 3 ])                    , 0 );
// assert.strictEqual( sumArray([ 3, 5 ])                 , 0 );
// assert.strictEqual( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
// assert.strictEqual( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
// assert.strictEqual( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
// assert.strictEqual( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );


// ✅ SOLUTION
function sumArray(array) {
    if (!Array.isArray(array) || array.length <= 2) {
        return 0;
    }

    const highest = Math.max(...array);
    const lowest = Math.min(...array);

    let highestFound = false;
    let lowestFound = false;

    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === highest && !highestFound) {
            highestFound = true;
        } else if (array[i] === lowest && !lowestFound) {
            lowestFound = true;
        } else {
            result += array[i];
        }
    }
    return result;
}


// ✅ Checking
console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([3]));
console.log(sumArray([3, 5]));
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([0, 1, 6, 10, 10]));
console.log(sumArray([-6, -20, -1, -10, -12]));
console.log(sumArray([-6, 20, -1, 10, -12]));