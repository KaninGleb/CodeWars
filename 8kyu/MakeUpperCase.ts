// ❓DESCRIPTION
// Write a function which converts the input string to uppercase.


// ⚙️ TESTS
// assert.strictEqual(makeUpperCase(""),           "");
// assert.strictEqual(makeUpperCase("hello"), "HELLO");
// assert.strictEqual(makeUpperCase("Hello"), "HELLO");
// assert.strictEqual(makeUpperCase("HELLO"), "HELLO");


// ✅ SOLUTION
const makeUpperCase = (str: string) => str.toUpperCase();


// ✅ Checking
console.log(makeUpperCase(""),           "");
console.log(makeUpperCase("hello"), "HELLO");
console.log(makeUpperCase("Hello"), "HELLO");
console.log(makeUpperCase("HELLO"), "HELLO");