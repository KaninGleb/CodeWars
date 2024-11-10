// ❓DESCRIPTION
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]


// ⚙️ TESTS
// assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);


// ✅ SOLUTION
const reverseSeq = n => {
    const result = [];
    for (let i = n; i > 0; i--) {
        result.push(i);
    }
    return result;
};


// ✅ Checking
console.log(reverseSeq(5));
console.log(reverseSeq(7));
console.log(reverseSeq(10));