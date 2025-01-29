// ❓DESCRIPTION
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//
// Note: a and b are not ordered!
//
// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


// ⚙️ TESTS
// assert.strictEqual(getSum(0,-1), -1);
// assert.strictEqual(getSum(0, 1),  1);
// assert.strictEqual(getSum(2, 2),  2);


// ✅ SOLUTION
const getSum = (a, b) => {
    if (a === b) return a;

    const start = Math.min(a, b);
    const end = Math.max(a, b);

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}


// ✅ Checking
console.log(getSum(0,-1));
console.log(getSum(0, 1));
console.log(getSum(2, 2));