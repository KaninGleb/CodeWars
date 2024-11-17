// ❓DESCRIPTION
// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7


// ⚙️ TESTS
// Test.assertEquals(stringToNumber("1234"),1234)
// Test.assertEquals(stringToNumber("605"), 605)
// Test.assertEquals(stringToNumber("1405"),1405)
// Test.assertEquals(stringToNumber("-7"),  -7)


// ✅ SOLUTION
const stringToNumber = str => Number(str);


// ✅ Checking
console.log(stringToNumber("1234"));
console.log(stringToNumber("605"));
console.log(stringToNumber("1405"));
console.log(stringToNumber("-7"));