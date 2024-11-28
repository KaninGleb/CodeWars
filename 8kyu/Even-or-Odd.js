// ❓DESCRIPTION
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


// ⚙️ TESTS
// assert.strictEqual(evenOrOdd(2), "Even");
// assert.strictEqual(evenOrOdd(7), "Odd");
// assert.strictEqual(evenOrOdd(-42), "Even");
// assert.strictEqual(evenOrOdd(-7), "Odd");
// assert.strictEqual(evenOrOdd(0), "Even");


// ✅ SOLUTION
const evenOrOdd = num => num % 2 ? "Odd" : "Even";


// ✅ Checking
console.log(evenOrOdd(2));
console.log(evenOrOdd(7));
console.log(evenOrOdd(-42));
console.log(evenOrOdd(-7));
console.log(evenOrOdd(0));