// ❓DESCRIPTION
// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]


// ⚙️ TESTS
// Test.assertSimilar(reverseList([1,2,3,4]), [4,3,2,1]);
// Test.assertSimilar(reverseList([3,1,5,4]), [4,5,1,3]);


// ✅ SOLUTION
function reverseList(list) {
    const result = [];

    for (let i = list.length - 1; i >= 0; i--) {
        result.push(list[i]);
    }
    return result;
}


// ✅ Checking
console.log(reverseList([1,2,3,4]));
console.log(reverseList([3,1,5,4]));