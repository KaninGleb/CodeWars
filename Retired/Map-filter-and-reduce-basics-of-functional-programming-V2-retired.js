// ❓DESCRIPTION
// Map, Filter, and Reduce
// map, filter, and reduce are three of the most basic functions that are used to iterate over lists in a functional style. They offer a declarative approach to solving problems as opposed to an imperative one using loops.

// The functions
// Map
// map is used to transform a list using a given function. It's akin to modifying an array in place using a loop.

// Example:

// const arr = [1,2,3,4];
// arr.map(i => i * 2); // [2, 4, 6, 8]
// Filter
// filter is used to select a subset of a list.

// Example:

// const arr = [1,2,3,4];
// arr.filter(i => i % 2 === 0) // [2, 4]
// Reduce
// reduce is used to transform a list into a single value.

// The function that is passed to this method is typically called a "reducer". It can also have an initial starting value.

// Examples:

// const arr = [1,2,3,4];
// const sum = arr.reduce((acc, cur) => {
//   return acc + cur;
// }, 0);

// console.log(sum); // 10

// // Get the max
// const max = arr.reduce((acc, cur) => {
//   if (cur > acc) {
//     return cur;
//   } else {
//     return acc;
//   }
// }, -Infinity);

// console.log(max) // 4
// Task
// Your task is to implement these functions for arrays, lists, or however your language defines a collection of items.


// ⚙️ TESTS
// assert.deepEqual(arr.map(i => i * 2), [2,4,6,8]);
// assert.deepEqual(arr.map(i => i + 2), [3,4,5,6]);
// assert.deepEqual(arr.filter(i => i % 2 === 0), [2,4]);
// assert.deepEqual(arr.reduce((acc, cur) => acc + cur, 0), 10)
// assert.isTrue(arr.map(i => i * 2) !== arr);
// assert.isTrue(arr.filter(i => i) !== arr);


// ✅ SOLUTION
// Implementing map
Array.prototype.map = function (fun) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) {                                            // Check if the index is in the array
            result[i] = fun(this[i], i, this);                      // Call the function with current value, index, and original array
        }
    }
    return result;
}


// Implementing filter
Array.prototype.filter = function (fun) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this && fun(this[i], i, this)) {                   // Check if the index is in the array and if the function returns true
            result.push(this[i]);                                   // Add the current value to the result array
        }
    }
    return result;
}


// Implementing reduce
Array.prototype.reduce = function (fun, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    // If no initialValue is provided, use the first element of the array
    if (accumulator === undefined) {
        accumulator = this[0];
        startIndex = 1;                                             // Start from the second element
    }

    for (let i = startIndex; i < this.length; i++) {
        if (i in this) {                                            // Check if the index is in the array
            accumulator = fun(accumulator, this[i], i, this);       // Update the accumulator
        }
    }
    return accumulator;
}


// ✅ Checking
const arr = [1, 2, 3, 4];

console.log("Testing map function:");
console.log("Expected:", [2, 4, 6, 8], "Actual:", arr.map(i => i * 2));
console.log("Expected:", [3, 4, 5, 6], "Actual:", arr.map(i => i + 2));

console.log("\nTesting filter function:");
console.log("Expected:", [2, 4], "Actual:", arr.filter(i => i % 2 === 0));

console.log("\nTesting reduce function:");
console.log("Expected:", 10, "Actual:", arr.reduce((acc, cur) => acc + cur, 0));

console.log("\nTesting array modification:");
const mapResult = arr.map(i => i * 2);
const filterResult = arr.filter(i => i);
console.log("Map result is a new array:", mapResult !== arr);
console.log("Filter result is a new array:", filterResult !== arr);