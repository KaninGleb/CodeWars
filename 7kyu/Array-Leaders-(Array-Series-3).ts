// ❓DESCRIPTION
// Definition:
// An element is leader if it is greater than The Sum all the elements to its right side.
//
// Task:
// Given an array/list [] of integers , Find all the LEADERS in the array.
//
// Notes:
// 1. Array/list size is at least 3 .
// 2. Array/list's numbers Will be mixture of positives , negatives and zeros
// 3. Repetition of numbers in the array/list could occur.
// 4. Returned Array/list should store the leading numbers in the same order in the original array/list .
//
// Input >> Output Examples:
// arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
// arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
// arrayLeaders ({5, 2, -1}) ==> return {5, 2}
// arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}

// ⚙️ TESTS
// assert.deepEqual(arrayLeaders([1, 2, 3, 4, 0]), [4]);
// assert.deepEqual(arrayLeaders([16, 17, 4, 3, 5, 2]), [17, 5, 2]);
// assert.deepEqual(arrayLeaders([-1, -29, -26, -2]), [-1]);
// assert.deepEqual(arrayLeaders([-36, -12, -27]), [-36, -12]);
// assert.deepEqual(arrayLeaders([5, -2, 2]), [5, 2]);
// assert.deepEqual(arrayLeaders([0, -1, -29, 3, 2]), [0, -1, 3, 2]);


// ✅ SOLUTION
export function arrayLeaders(numbers: number[]): number[] {
    const leaders: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        const rightSum  = numbers.slice(i + 1).reduce((a, b) => a + b, 0);
        if (numbers[i] > rightSum) {
            leaders.push(numbers[i])
        }
    }
    return leaders
}


// ✅ Checking
console.log(arrayLeaders([1, 2, 3, 4, 0]));
console.log(arrayLeaders([16, 17, 4, 3, 5, 2]));
console.log(arrayLeaders([-1, -29, -26, -2]));
console.log(arrayLeaders([-36, -12, -27]));
console.log(arrayLeaders([5, -2, 2]));
console.log(arrayLeaders([0, -1, -29, 3, 2]));