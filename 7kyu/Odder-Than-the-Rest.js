// ❓DESCRIPTION
// Create a method that takes an array/list as an input, and outputs the index at which the sole odd number is located.
//
// This method should work with arrays with negative numbers. If there are no odd numbers in the array, then the method should output -1.
//
// Examples:
// oddOne([2,4,6,7,10]) // => 3
// oddOne([2,16,98,10,13,78]) // => 4
// oddOne([4,-8,98,-12,-7,90,100]) // => 4
// oddOne([2,4,6,8]) // => -1


// ⚙️ TESTS
// Test.assertEquals(oddOne([2,4,6,7,10]), 3);
// Test.assertEquals(oddOne([2,16,98,10,13,78]), 4);
// Test.assertEquals(oddOne([4,-8,98,-12,-7,90,100]), 4);
// Test.assertEquals(oddOne([2,4,6,8]), -1);


// ✅ SOLUTION
// OPTION 1
const oddOne = arr => {
    let oddIndex = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            if (oddIndex !== -1) {
                return -1
            }
            oddIndex = i;
        }
    }
    return oddIndex;
}


// OPTION 2
const oddOne2 = arr => arr.findIndex(x => x % 2 !== 0);


// ✅ Checking
console.log(oddOne([2, 4, 6, 7, 10]));
console.log(oddOne([2, 16, 98, 10, 13, 78]));
console.log(oddOne([4, -8, 98, -12, -7, 90, 100]));
console.log(oddOne([2, 4, 6, 8]));

console.log(oddOne2([2, 4, 6, 7, 10]));
console.log(oddOne2([2, 16, 98, 10, 13, 78]));
console.log(oddOne2([4, -8, 98, -12, -7, 90, 100]));
console.log(oddOne2([2, 4, 6, 8]));