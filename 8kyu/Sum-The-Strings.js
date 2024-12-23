// ❓DESCRIPTION
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
//
// Example: (Input1, Input2 -->Output)
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"


// ⚙️ TESTS
// assert.strictEqual(sumStr("4","5"), "9");
// assert.strictEqual(sumStr("34","5"), "39");


// ✅ SOLUTION
// OPTION 1
const sumStr = (a, b) => (Number(a) + Number(b)).toString();


// OPTION 2
const sumStr2 = (a, b) => (+a + +b).toString();



// ✅ Checking
console.log(sumStr("4","5"));
console.log(sumStr("34","5"));
console.log(sumStr("", ""));
console.log(sumStr("2", ""));
console.log(sumStr("-5", "3"));

console.log(sumStr2("4","5"));
console.log(sumStr2("34","5"));
console.log(sumStr2("", ""));
console.log(sumStr2("2", ""));
console.log(sumStr2("-5", "3"));