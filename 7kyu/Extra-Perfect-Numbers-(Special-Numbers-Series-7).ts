// ❓DESCRIPTION
// Definition:
// Extra perfect number is the number that first and last bits are set bits.
//
// Task:
// Given a positive integer N , Return the extra perfect numbers in range from 1 to N .
//
// Notes:
// Number passed is always Positive .
// Returned array/list should contain the extra perfect numbers in ascending order from lowest to highest
//
// Input >> Output Examples:
// extraPerfect(3)  ==>  return {1,3}
// Explanation:
// (1)10 =(1)2
// First and last bits as set bits.
// (3)10 = (11)2
// First and last bits as set bits.
//
// extraPerfect(7)  ==>  return {1,3,5,7}
// Explanation:
// (5)10 = (101)2
// First and last bits as set bits.
// (7)10 = (111)2
// First and last bits as set bits.


// ⚙️ TESTS
// Test.assertSimilar(extraPerfect(3), [1,3]);
// Test.assertSimilar(extraPerfect(5), [1,3,5]);
// Test.assertSimilar(extraPerfect(7), [1,3,5,7]);
// Test.assertSimilar(extraPerfect(28), [1,3,5,7,9,11,13,15,17,19,21,23,25,27]);
// Test.assertSimilar(extraPerfect(39), [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]);


// ✅ SOLUTION
export function extraPerfect(n: number) {
    const result = [];

    for (let i = 0; i <= n; i++) {
        if (i % 2 === 1) {
            result.push(i);
        }
    }
    return result;
}


// ✅ Checking
console.log(extraPerfect(3));
console.log(extraPerfect(5));
console.log(extraPerfect(7));
console.log(extraPerfect(28));
console.log(extraPerfect(39));