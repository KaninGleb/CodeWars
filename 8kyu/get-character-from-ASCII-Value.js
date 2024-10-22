// ❓DESCRIPTION
// Write a function which takes a number and returns the corresponding ASCII char for that value.


// ⚙️ TESTS
// assert.strictEqual(getChar(55), '7')
// assert.strictEqual(getChar(56), '8')
// assert.strictEqual(getChar(57), '9')
// assert.strictEqual(getChar(58), ':')
// assert.strictEqual(getChar(59), ';')
// assert.strictEqual(getChar(60), '<')
// assert.strictEqual(getChar(61), '=')
// assert.strictEqual(getChar(62), '>')
// assert.strictEqual(getChar(63), '?')
// assert.strictEqual(getChar(64), '@')
// assert.strictEqual(getChar(65), 'A')


// ✅ SOLUTION
function getChar(c) {
    return String.fromCharCode(c);
}