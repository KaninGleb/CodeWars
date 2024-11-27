// ❓DESCRIPTION
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// ⚙️ TESTS
// describe("Example tests", () => {
//     it("Testing for fixed test 1", () => {
//         let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
//         let actual = countPositivesSumNegatives(testData);
//         let expected = [10, -65];
//         assert.deepEqual(actual, expected);
//     })

//     it("Testing for fixed test 2", () => {
//         let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
//         let actual = countPositivesSumNegatives(testData);
//         let expected = [8, -50];
//         assert.deepEqual(actual, expected);
//     });
// });


// ✅ SOLUTION
function countPositivesSumNegatives(input) {
    if ( input === null || input.length === 0 ) return [];

    let positivesCounter = 0;
    let negativesSum = 0;

    input.forEach(num => {
        if (num > 0) {
            positivesCounter++;
        } else if (num < 0) {
            negativesSum += num;
        }
    })
    return [positivesCounter, negativesSum];
}


// ✅ Checking
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives(null));
console.log(countPositivesSumNegatives([0, 0, 0]));