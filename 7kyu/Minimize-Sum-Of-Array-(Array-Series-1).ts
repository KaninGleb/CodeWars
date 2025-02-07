// ❓DESCRIPTION
// Task:
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
//
// Notes:
// Array/list will contain positives only.
// Array/list will always have even size.
//
// Input >> Output Examples:
// minSum({5,4,2,3}) ==> return (22)
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
// The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
// minSum({9,2,8,7,5,4,0,6}) ==> return (74)
// The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74


// ⚙️ TESTS
// it("Testing for [5, 4, 2, 3]", () => assert.strictEqual(minSum([5, 4, 2, 3]), 22));
// it("Testing for [12, 6, 10, 26, 3, 24]", () => assert.strictEqual(minSum([12, 6, 10, 26, 3, 24]), 342));
// it("Testing for [9, 2, 8, 7, 5, 4, 0, 6]", () => assert.strictEqual(minSum([9, 2, 8, 7, 5, 4, 0, 6]), 74));


// ✅ SOLUTION
export function minSum(arr: number[]): number {
    arr.sort((a, b) => a - b);

    let totalSum = 0;
    const n = arr.length;

    for (let i = 0; i < n / 2; i++) {
        totalSum += arr[i] * arr[n - 1 - i];
    }
    return totalSum;
}


// ✅ Checking
console.log((minSum([5, 4, 2, 3])));
console.log((minSum([12, 6, 10, 26, 3, 24])));
console.log((minSum([9, 2, 8, 7, 5, 4, 0, 6])));