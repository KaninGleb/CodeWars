// ❓DESCRIPTION
// Task:
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers in the range of 1 to 9 will be passed to the function.
//
// Examples:
// [1, 3, 1]                    ==> 13
// [5, 7, 5, 9, 7]              ==> 579
// [1, 9, 3, 1, 7, 4, 6, 6, 7]  ==> 134679


// ⚙️ TESTS
// assert.strictEqual(minValue([1, 3, 1]), 13);
// assert.strictEqual(minValue([4, 7, 5, 7]), 457);
// assert.strictEqual(minValue([4, 8, 1, 4]), 148);
// assert.strictEqual(minValue([5, 7, 9, 5, 7]), 579);
// assert.strictEqual(minValue([6, 7, 8, 7, 6, 6]), 678);
// assert.strictEqual(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
// assert.strictEqual(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);
// assert.strictEqual(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789);
// assert.strictEqual(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1);


// ✅ SOLUTION
export const minValue = (values: number[]): number => {
    return +Array.from(new Set(values))
                    .sort()
                    .join('');
}


// ✅ Checking
console.log(minValue([1, 3, 1]));
console.log(minValue([4, 7, 5, 7]));
console.log(minValue([4, 8, 1, 4]));
console.log(minValue([5, 7, 9, 5, 7]));
console.log(minValue([6, 7, 8, 7, 6, 6]));
console.log(minValue([5, 6, 9, 9, 7, 6, 4]));
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]));
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]));
console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));