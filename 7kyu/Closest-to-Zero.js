// ❓DESCRIPTION
// Simply find the closest value to zero from the list. Notice that there are negatives in the list.

// List is always not empty and contains only integers. Return None if it is not possible to define only one of such values. And of course, we are expecting 0 as closest value to zero.

// Examples:
// [2, 4, -1, -3]     => -1
// [5, 2, -2]         => None
// [5, 2, 2]          => 2
// [13, 0, -6]        => 0


// ⚙️ TESTS
// assert.strictEqual(closest([10, 3, 9, 1]), 1);
// assert.strictEqual(closest([2, 4, -1, -3]), -1);
// assert.strictEqual(closest([13, 0, -6]), 0);
// assert.strictEqual(closest([5, 1, -1, 2, -10]), null);
// assert.strictEqual(closest([5, 11, 11, 2, -1, 1]), null);


// ✅ SOLUTION
// OPTION 1
const closest = arr => {
    const sorted = [...new Set(arr)].sort((a, b) => Math.abs(a) - Math.abs(b));

    if (Math.abs(sorted[0]) !== Math.abs(sorted[1])) {
        return sorted[0];
    } else {
        return null;
    }
}

// // Error
// const closest = arr => {
//     let closestValue = null;
//     let count = 0;
//
//     for (const num of arr) {
//         if (closestValue === null || Math.abs(num) < Math.abs(closestValue)) {
//             closestValue = num;
//             count = 1;
//         } else if (Math.abs(num) === Math.abs(closestValue)) {
//             count++;
//         }
//     }
//     return count > 1 ? null : closestValue;
// }


// ✅ Checking
console.log(closest([10, 3, 9, 1]), '--- 1');
console.log(closest([2, 4, -1, -3]), '--- -1');
console.log(closest([13, 0, -6]), '--- 0');
console.log(closest([5, 1, -1, 2, -10]), '--- null');
console.log(closest([5, 11, 11, 2, -1, 1]), '--- null');