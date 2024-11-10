// ❓DESCRIPTION
// Code as fast as you can! You need to double the integer and return it.


// ⚙️ TESTS
// Test.assertEquals(doubleInteger(2), 4);


// ✅ SOLUTION
// OPTION 1
function doubleInteger(i) {
    i = i * 2;
    return i;
}


// OPTION 2
const doubleInteger = i => i * 2;


// ✅ Checking
console.log(doubleInteger(5));
console.log(doubleInteger(-3));