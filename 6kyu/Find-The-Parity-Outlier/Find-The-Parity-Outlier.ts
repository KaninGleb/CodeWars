// ❓DESCRIPTION
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
//
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number


// ⚙️ TESTS
// assert.equal(findOutlier([0, 1, 2]), 1);
// assert.equal(findOutlier([1, 2, 3]), 2);
// assert.equal(findOutlier([2, 6, 8, 10, 3]), 3);
// assert.equal(findOutlier([0, 0, 3, 0, 0]), 3);
// assert.equal(findOutlier([1, 1, 0, 1, 1]), 0);


// ✅ SOLUTION
export function findOutlier(integers: number[]) {
    const oddCounter = integers.filter(n => n % 2 === 0).length;

    if (oddCounter > 1) {
        const output = integers.find(n => n % 2 !== 0);
        if (output !== undefined) {
            return output;
        }
    } else {
        const output = integers.find(n => n % 2 === 0);
        if (output !== undefined) {
            return output;
        }
    }
}