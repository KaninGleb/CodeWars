// ❓DESCRIPTION
// Write a function that:
// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.


// ⚙️ TESTS
// doTest([], true);
// doTest([1, 2, 3, 4], true);
// doTest([-11, -12, -13, -14], true);
// doTest([1.0, 2.0, 3.0], true);
// doTest([1, 2, NaN], false);
// doTest(true, false);
// doTest(null, false);
// doTest(undefined, false);
// doTest(NaN, false);
// doTest('', false);
// doTest([null], false);
// doTest([undefined], false);
// doTest([NaN], false);
// doTest([1.0, 2.0, 3.0001], false);
// doTest(['-1'], false);
// doTest([1.23e-7, 2], false);
// doTest([1.2, 1.8, 3], false);


// ✅ SOLUTION
const isIntArray = (arr: any) => {
    if (!Array.isArray(arr)) return false;

    if (arr.length === 0) return true;

    return arr.every((num) =>
        typeof num === 'number' &&
        Number.isFinite(num) &&
        Math.floor(num) === num
    )
}


// ✅ Checking
console.log(isIntArray([]), '--- true');
console.log(isIntArray([1, 2, 3, 4]), '--- true');
console.log(isIntArray([-11, -12, -13, -14]), '--- true');
console.log(isIntArray([1.0, 2.0, 3.0]), '--- true');
console.log(isIntArray([1, 2, NaN]), '--- false');
console.log(isIntArray(true), '--- false');
console.log(isIntArray(null), '--- false');
console.log(isIntArray(undefined), '--- false');
console.log(isIntArray(NaN), '--- false');
console.log(isIntArray(''), '--- false');
console.log(isIntArray([null]), '--- false');
console.log(isIntArray([undefined]), '--- false');
console.log(isIntArray([NaN]), '--- false');
console.log(isIntArray([1.0, 2.0, 3.0001]), '--- false');
console.log(isIntArray(['-1']), '--- false');
console.log(isIntArray([1.23e-7, 2]), '--- false');
console.log(isIntArray([1.2, 1.8, 3]), '--- false');