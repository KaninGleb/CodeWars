// ❓DESCRIPTION
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398


// ⚙️ TESTS
// Test.assertEquals(sum([]), 0);
// Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);


// ✅ SOLUTION
// OPTION 1
function sum (numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}


// OPTION 2
function sum (numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}


// ✅ Checking
console.log(sum([]));
console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([-2.398]));