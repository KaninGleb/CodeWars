// ❓DESCRIPTION
// Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

// To judge the number n. If n is one of the above five constants, return one of these string:
// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// Other values should return "Input number is xxx". xxx means this number.

// For example:
// whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
// whatNumberIsIt(100) should return "Input number is 100"
// What you need to think about is how to judge it correctly and effectively and don't forget isNaN()


// ⚙️ TESTS
// Test.assertSimilar(whatNumberIsIt(1 / 0), "Input number is Number.POSITIVE_INFINITY");
// Test.assertSimilar(whatNumberIsIt(100), "Input number is 100");
// Test.assertSimilar(whatNumberIsIt(1.7976931348623157e+308), "Input number is Number.MAX_VALUE");
// Test.assertSimilar(whatNumberIsIt(5e-324), "Input number is Number.MIN_VALUE");
// Test.assertSimilar(whatNumberIsIt(-Number.MAX_VALUE * 2), "Input number is Number.NEGATIVE_INFINITY");
// Test.assertSimilar(whatNumberIsIt(NaN), "Input number is Number.NaN");
// Test.assertSimilar(whatNumberIsIt(Infinity + 1), "Input number is Number.POSITIVE_INFINITY");


// ✅ SOLUTION
function whatNumberIsIt(n) {
    if (n === Number.POSITIVE_INFINITY) {
        return "Input number is Number.POSITIVE_INFINITY";
    } else if (n === Number.NEGATIVE_INFINITY) {
        return "Input number is Number.NEGATIVE_INFINITY";
    } else if (n === Number.MAX_VALUE) {
        return "Input number is Number.MAX_VALUE";
    } else if (n === Number.MIN_VALUE) {
        return "Input number is Number.MIN_VALUE";
    } else if (Object.is(n, NaN)) {
        return "Input number is Number.NaN";
    } else {
        return `Input number is ${n}`;
    }
}


// ✅ Checking
console.log(whatNumberIsIt(1 / 0));
console.log(whatNumberIsIt(100));
console.log(whatNumberIsIt(1.7976931348623157e+308));
console.log(whatNumberIsIt(5e-324));
console.log(whatNumberIsIt(-Number.MAX_VALUE * 2));
console.log(whatNumberIsIt(NaN));
console.log(whatNumberIsIt(Infinity + 1));