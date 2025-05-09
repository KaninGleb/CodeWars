// ❓DESCRIPTION
// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.


// ⚙️ TESTS
// assert.strictEqual(testEven(0), true, "testEven for 0");
// assert.strictEqual(testEven(0.5), false, "testEven for 0.5");
// assert.strictEqual(testEven(1), false, "testEven for 1");
// assert.strictEqual(testEven(2), true, "testEven for 2");
// assert.strictEqual(testEven(-4), true, "testEven for 2");


// ✅ SOLUTION
const testEven = n => n % 2 === 0;


// ✅ Checking
console.log(testEven(0));
console.log(testEven(0.5));
console.log(testEven(1));
console.log(testEven(2));
console.log(testEven(-4));