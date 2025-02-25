// ❓DESCRIPTION
// Clock shows h hours, m minutes and s seconds after midnight.
//
// Your task is to write a function which returns the time since midnight in milliseconds.
//
// Example:
// h = 0
// m = 1
// s = 1
//
// result = 61000
//
// Input constraints:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59



// ⚙️ TESTS
// assert.equal(past(0, 1, 1), 61000);
// assert.equal(past(1, 1, 1), 3661000);
// assert.equal(past(0, 0, 0), 0);
// assert.equal(past(1, 0, 1), 3601000);
// assert.equal(past(1, 0, 0), 3600000);


// ✅ SOLUTION
export function past(h: number, m: number, s: number): number {
    return (h * 3600000) + (m * 60000) + (s * 1000);
}