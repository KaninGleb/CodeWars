// ❓DESCRIPTION
// Given a number n, return the number of positive odd numbers below n, EASY!
//
// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!


// ⚙️ TESTS
// assert.equal(oddCount(7), 3)
// assert.equal(oddCount(15), 7)


// ✅ SOLUTION
export const oddCount = (n: number) => Math.floor(n / 2);


// ✅ Checking
console.log(oddCount(7), 3)
console.log(oddCount(15), 7)
console.log(oddCount(514767660659333));