// ❓DESCRIPTION
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


// ⚙️ TESTS
// assert.strictEqual(summation(1), 1);
// assert.strictEqual(summation(2), 3);
// assert.strictEqual(summation(8), 36);


// ✅ SOLUTION
// OPTION 1
let summation = function (num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}


// OPTION 2
function summation (num) {
    return num * (num + 1) / 2;
}


// OPTION 3
const summation = n => n * (n + 1) / 2;


// ✅ Checking
console.log(summation(5));
console.log(summation(7));
console.log(summation(10));