// ❓DESCRIPTION
// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).

// Examples:
// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]


// ⚙️ TESTS
// assert.deepEqual(countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
// assert.deepEqual(countBy(2,5), [2,4,6,8,10], "Array does not match")


// ✅ SOLUTION
// OPTION 1
function countBy(x, n) {
    let z = [];
    let num = 0;
    for (let i = 0; i < n; i++) {
        z.push(num += x);
    }
    return z;
}


// OPTION 2
function countBy(x, n) {
    let z = [];
    for (let i = 0; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}


// ✅ Checking
console.log(countBy(1, 10));
console.log(countBy(2, 5));