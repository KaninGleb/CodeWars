// ❓DESCRIPTION
// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


// ⚙️ TESTS
// assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
// assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
// assert.deepEqual(sortArray([]),[]);


// ✅ SOLUTION
function sortArray(array) {
    const oddNum = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);

    let counter = 0;
    const result = array.map(num => {
        if (num % 2 !== 0) {
            return oddNum[counter++];
        }
        return num;
    })
    return result;
}


// ✅ Checking
console.log(sortArray([7, 1]));
console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));