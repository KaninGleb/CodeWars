// ❓DESCRIPTION
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
//
// The binary number returned should be a string.
//
// Examples:(Input1, Input2 --> Output (explanation)))
//
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)


// ⚙️ TESTS
// var results1 = addBinary(1,2);
// Test.expect(results1, "Something is wrong, no results!");
// Test.assertEquals(results1, "11");


// ✅ SOLUTION
const addBinary = (a, b) => (a + b).toString(2);


// ✅ Checking
console.log(addBinary(1, 2));
console.log(addBinary(1, 0));
console.log(addBinary(5, 9));