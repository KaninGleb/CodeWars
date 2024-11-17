// ❓DESCRIPTION
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"


// ⚙️ TESTS
// assert.strictEqual(numberToString(67), '67');


// ✅ SOLUTION
// OPTION 1
function numberToString(num) {
    return String(num);
}


// OPTION 2
const numberToString = num => String(num);


// ✅ Checking
console.log(numberToString(67));