// ❓DESCRIPTION
// Task:
// Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -
//
// Notes:
// The numbers (a,b) may be positive , negative values or zeros .
// Returning value will be an integer .
// Javascript: the Array reduce methods are disabled, along with eval, require, and module .
//
// Input >> Output Examples:
// 1- Add (5,19) ==> return (24)
// 2- Add (-27,18) ==> return (-9)
// 3- Add (-14,-16) ==> return (-30)


// ⚙️ TESTS
// assert.strictEqual(add(1, 2), 3);
// assert.strictEqual(add(5, 19), 24);
// assert.strictEqual(add(23, 17), 40);
// assert.strictEqual(add(-14, -16), -30);
// assert.strictEqual(add(-50, -176), -226);
// assert.strictEqual(add(-10, -29), -39);
// assert.strictEqual(add(-13, 13), 0);
// assert.strictEqual(add(-27, 18), -9);
// assert.strictEqual(add(-90, 30), -60);


// ✅ SOLUTION
const add = (a: number, b: number): number => {
    while (b !== 0) {
        const sum = a ^ b;
        const carry = (a & b) << 1;
        a = sum;
        b = carry;
    }
    return a;
}


// ✅ Checking
console.log(add(1, 2) === 3);
console.log(add(5, 19) === 24);
console.log(add(23, 17) === 40);
console.log(add(-14, -16) === -30);
console.log(add(-50, -176) === -226);
console.log(add(-10, -29) === -39);
console.log(add(-13, 13) === 0);
console.log(add(-27, 18) === -9);
console.log(add(-90, 30) === -60);