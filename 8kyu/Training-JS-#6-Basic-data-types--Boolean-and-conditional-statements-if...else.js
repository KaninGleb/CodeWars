// ❓DESCRIPTION
// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".


// ⚙️ TESTS
// Test.assertSimilar(trueOrFalse(a > b), "false");
// Test.assertSimilar(trueOrFalse(a === b), "false");
// Test.assertSimilar(trueOrFalse(a < b), "true");
// Test.assertSimilar(trueOrFalse(a !== b), "true");
// Test.assertSimilar(trueOrFalse(b > c), "true");
// Test.assertSimilar(trueOrFalse(b === c), "false");
// Test.assertSimilar(trueOrFalse(b < c), "false");
// Test.assertSimilar(trueOrFalse(b !== c), "true");
// Test.assertSimilar(trueOrFalse(a === c), "true");
// Test.assertSimilar(trueOrFalse(a !== c), "false");


// ✅ SOLUTION
// OPTION 1
function trueOrFalse (val) {
    if (!val) {
        return "false"
    } else {
        return "true"
    }
}


// OPTION 2
function trueOrFalse (val) {
    return !val ? "false" : "true"
}


// ✅ Checking
let a = 5, b = 10, c = 5;

console.log(trueOrFalse(a > b));
console.log(trueOrFalse(a === b));
console.log(trueOrFalse(a < b));
console.log(trueOrFalse(a !== b));
console.log(trueOrFalse(b > c));
console.log(trueOrFalse(b === c));
console.log(trueOrFalse(b < c)); 
console.log(trueOrFalse(b !== c)); 
console.log(trueOrFalse(a === c));
console.log(trueOrFalse(a !== c));