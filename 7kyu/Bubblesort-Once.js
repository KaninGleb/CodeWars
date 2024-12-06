// ❓DESCRIPTION
// Task:
// Given an array of integers, your function bubblesortOnce/bubblesort_once/BubblesortOnce (or equivalent, depending on your language's naming conventions) should return a new array equivalent to performing exactly 1 complete pass on the original array. Your function should be pure, i.e. it should not mutate the input array.


// ⚙️ TESTS
// Test.assertDeepEquals(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]), [7, 5, 3, 1, 2, 4, 6, 8, 9]);


// ✅ SOLUTION
const bubblesortOnce = (arr) => {
    const result = arr.slice();

    for (let i = 0; i < result.length - 1; i++) {
        if (result[i] > result[i + 1]) {

            let temp = result[i];
            result[i] = result[i + 1];
            result[i + 1] = temp;
        }
    }
    return result;
}


// ✅ Checking
console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]));