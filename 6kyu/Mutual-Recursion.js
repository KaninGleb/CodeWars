// ❓DESCRIPTION
// Mutual Recursion allows us to take the fun of regular recursion (where a function calls itself until a terminating condition) and apply it to multiple functions calling each other!

// Let's use the Hofstadter Female and Male sequences to demonstrate this technique. You'll want to create two functions F and M such that the following equations are true:

// F(0) = 1
// M(0) = 0
// F(n) = n - M(F(n - 1))
// M(n) = n - F(M(n - 1))
// Don't worry about negative numbers, n will always be greater than or equal to zero.


// ⚙️ TESTS
// assert.deepEqual(Array.from({length: 10}, (_, i) => F(i)), [1,1,2,2,3,3,4,5,5,6], 'F');
// assert.deepEqual(Array.from({length: 10}, (_, i) => M(i)), [0,0,1,2,2,3,4,4,5,6], 'M');


// ✅ SOLUTION
function F(n) {
    if (n === 0) {
        return 1;
    } else {
        return n - M(F(n - 1));
    }
}


function M(n) {
    if (n === 0) {
        return 0;
    } else {
        return n - F(M(n - 1));
    }
}


// ✅ Checking
console.log("F(0):", F(0));
console.log("F(1):", F(1));
console.log("F(2):", F(2));
console.log("F(3):", F(3));
console.log("M(0):", M(0));
console.log("M(1):", M(1));
console.log("M(2):", M(2));
console.log("M(3):", M(3));