// ❓DESCRIPTION
// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
//
// Examples:
// input:      output:
// 0     ->    0
// 2     ->    5
// 3     ->    5
// 12    ->    15
// 21    ->    25
// 30    ->    30
// -2    ->    0
// -5    ->    -5
// etc.
// Input may be any positive or negative integer (including 0).
//
// You can assume that all inputs are valid integers.


// ⚙️ TESTS
// [[0,0],[1,5],[-1,0],[-5,-5],[3,5],[5,5],[7,10],[20,20],[39,40],[990,990],[121,125],[555,555]].forEach(
//     ([x,exp])=> assert.strictEqual(roundToNext5(x), exp, `Input: ${x}`)


// ✅ SOLUTION
const roundToNext5 = n => Math.ceil(n / 5) * 5;


// ✅ Checking
[[0,0],[1,5],[-1,0],[-5,-5],[3,5],[5,5],[7,10],[20,20],[39,40],[990,990],[121,125],[555,555]].forEach(
    ([x, exp]) => {
        const result = roundToNext5(x);
        console.log(`Input: ${x}, Expected: ${exp}, Output: ${result}`);
    }
);