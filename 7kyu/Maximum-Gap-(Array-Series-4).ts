// ❓DESCRIPTION
// Task:
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
//
// Notes:
// Array/list size is at least 3 .
// Array/list's numbers Will be mixture of positives and negatives also zeros_
// Repetition of numbers in the array/list could occur.
// The Maximum Gap is computed Regardless the sign.
//
// Input >> Output Examples:
// maxGap ({13,10,5,2,9}) ==> return (4)
// maxGap ({-3,-27,-4,-2}) ==> return (23)
// maxGap ({-7,-42,-809,-14,-12}) ==> return (767)
// maxGap ({-54,37,0,64,640,0,-15}) //return (576)


// ⚙️ TESTS
// it("Testing for [13, 10, 2, 9, 5]", () => assert.strictEqual(maxGap([13, 10, 2, 9, 5]), 4));
// it("Testing for [13, 3, 5]", () => assert.strictEqual(maxGap([13, 3, 5]), 8));
// it("Testing for [24, 299, 131, 14, 26, 25]", () => assert.strictEqual(maxGap([24, 299, 131, 14, 26, 25]), 168));
// it("Testing for [-3, -27, -4, -2]", () => assert.strictEqual(maxGap([-3, -27, -4, -2]), 23));
// it("Testing for [-7, -42, -809, -14, -12]", () => assert.strictEqual(maxGap([-7, -42, -809, -14, -12]), 767));
// it("Testing for [12, -5, -7, 0, 290]", () => assert.strictEqual(maxGap([12, -5, -7, 0, 290]), 278));
// it("Testing for [-54, 37, 0, 64, -15, 640, 0]", () => assert.strictEqual(maxGap([-54, 37, 0, 64, -15, 640, 0]), 576));
// it("Testing for [130, 30, 50]", () => assert.strictEqual(maxGap([130, 30, 50]), 80));
// it("Testing for [1, 1, 1]", () => assert.strictEqual(maxGap([1, 1, 1]), 0));
// it("Testing for [-1, -1, -1]", () => assert.strictEqual(maxGap([-1, -1, -1]), 0));


// ✅ SOLUTION
export function maxGap(nums: number[]): number {
    const sorted = nums.sort((a, b) => a - b);

    let maxGap: number = 0;

    for (let i = 0; i < sorted.length; i++) {
        const gap: number = sorted[i + 1] - sorted[i];
        if (gap > maxGap) {
            maxGap = gap;
        }
    }
    return maxGap;
}


// ✅ Checking
console.log(maxGap([13, 10, 2, 9, 5]));
// console.log(maxGap([13, 3, 5]));
// console.log(maxGap([24, 299, 131, 14, 26, 25]));
// console.log(maxGap([-3, -27, -4, -2]));
// console.log(maxGap([-7, -42, -809, -14, -12]));
// console.log(maxGap([12, -5, -7, 0, 290]));
// console.log(maxGap([-54, 37, 0, 64, -15, 640, 0]));
// console.log(maxGap([130, 30, 50]));
// console.log(maxGap([1, 1, 1]));
// console.log(maxGap([-1, -1, -1]));