// ❓DESCRIPTION
// Given an array of positive integers, replace every element with the least greater element to its right. If there is no greater element to its right, replace it with -1. For instance, given the array
//
// [8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28],
//
// the desired output is
//
// [18, 63, 80, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1].
//
// Your task is to create a function that takes in an array as its argument, manipulates the array as described above, then return the resulting array.
//
// Note: Return a new array, rather than modifying the passed array.


// ⚙️ TESTS
// Test.assertSimilar(arrayManip([8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28]), [18, 63, 80, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1]);
// Test.assertSimilar(arrayManip([ 2, 4, 18, 16, 7, 3, 9, 13, 18, 10 ]), [3, 7, -1, 18, 9, 9, 10, 18, -1, -1]);


// ✅ SOLUTION
const arrayManip = arr => {
    const result = [];
    const sortedList = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        const current = arr[i];
        const index = sortedList.findIndex(num => num > current);

        result[i] = index === -1 ? -1 : sortedList[index];

        sortedList.splice(index === -1 ? sortedList.length : index, 0, current);
    }
    return result;
}


// ✅ Checking
console.log(arrayManip([8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28]));
console.log(arrayManip([2, 4, 18, 16, 7, 3, 9, 13, 18, 10]));