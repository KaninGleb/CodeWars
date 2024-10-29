// ❓DESCRIPTION
// The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

// Examples
// numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
// numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10, 6) // -> 1000000
// Note: Math.pow and some other Math functions like eval() and ** are disabled.


// ⚙️ TESTS
// assert.strictEqual(numberToPower(4, 2), 16);
// assert.strictEqual(numberToPower(10, 4), 10000);
// assert.strictEqual(numberToPower(10, 0), 1);


// ✅ SOLUTION
// OPTION 1
function numberToPower(number, power) {
    let result = 1;
    for (let i = 0; i < power; i++) {
        result *= number;
    }
    return result;
}


console.log(numberToPower(3, 2));
console.log(numberToPower(2, 3));
console.log(numberToPower(10, 6));
console.log(numberToPower(4, 2));
console.log(numberToPower(10, 4));
console.log(numberToPower(10, 0));