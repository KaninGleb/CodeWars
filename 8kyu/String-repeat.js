// ❓DESCRIPTION
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


// ⚙️ TESTS
// assert.strictEqual(repeatStr(3, "*"), "***");
// assert.strictEqual(repeatStr(5, "#"), "#####");
// assert.strictEqual(repeatStr(2, "ha "), "ha ha ");


// ✅ SOLUTION
const repeatStr = (n, s) => {
    return s.repeat(n)
}


// ✅ Checking
console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "#"));
console.log(repeatStr(2, "ha "));