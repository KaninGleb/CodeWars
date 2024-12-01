// ❓DESCRIPTION
// Write a function named numbers.
// function should return True if all parameters are of the Number type.
// The function should accept any number of parameters.
//
// Example usage:
// numbers(1, 4, 3, 2, 5); // true
// numbers(1, "a", 3); // false
// numbers(1, 3, NaN); // true


// ⚙️ TESTS
// assert.isFunction(numbers, "Name 'numbers' exists, but is not a function");
// assert.strictEqual(numbers(1, 12, 3, 100), true);
// assert.strictEqual(numbers("1", "2", "3", "4"), false);
// assert.strictEqual(numbers(1), true);
// assert.strictEqual(numbers(1, "2", [3, 4], "a"), false);
// assert.strictEqual(numbers(1, NaN, 3), true);
// assert.strictEqual(numbers(null), false);


// ✅ SOLUTION
const numbers = (...num) => num.every(num => typeof num === 'number');


// ✅ Checking
console.log(numbers(1, 12, 3, 100));
console.log(numbers("1", "2", "3", "4"));
console.log(numbers(1));
console.log(numbers(1, "2", [3, 4], "a"));
console.log(numbers(1, NaN, 3));
console.log(numbers(null));