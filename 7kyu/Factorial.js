// ❓DESCRIPTION
// Your task is to write function factorial.


// ⚙️ TESTS
// assert.equal(factorial(0), 1);
// assert.equal(factorial(1), 1);
// assert.equal(factorial(7), 5040);
// assert.equal(factorial(18), 6402373705728000);


// ✅ SOLUTION
function factorial(n) {
    if (n < 0) {
        return undefined;
    } 
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}


console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(7));
console.log(factorial(18));