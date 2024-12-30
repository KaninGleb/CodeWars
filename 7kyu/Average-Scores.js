// ❓DESCRIPTION
// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

// The array will never be empty.


// ⚙️ TESTS
// Test.assertEquals(average(scores), 73);
// Test.assertEquals(average(scores), 94);


// ✅ SOLUTION
const average = scores =>  Math.round(scores.reduce((a, b) => a + b, 0)/scores.length);


// ✅ Checking
const scores = [49, 3, 5, 300, 7];
console.log(average(scores), '--- 73');

const scores2 = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores2), '--- 94');