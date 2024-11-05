// ❓DESCRIPTION
// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.


// ⚙️ TESTS
// Test.assertEquals(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
// Test.assertEquals(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');


// ✅ SOLUTION
// OPTION 1
function booleanToString(b) {
    return b.toString();
}


// OPTION 2
const str = b => b.toString();


// ✅ Checking
console.log(booleanToString(true));
console.log(booleanToString(false));

console.log(str(true));
console.log(str(false));