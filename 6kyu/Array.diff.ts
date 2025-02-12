// ❓DESCRIPTION
// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.
//
// Examples:
// If a = [1, 2] and b = [1], the result should be [2].
//
// If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].


// ⚙️ TESTS
// expect(arrayDiff([], [4, 5])).to.eql([], 'a was [], b was [4,5]');
// expect(arrayDiff([3, 4], [3])).to.eql([4], 'a was [3, 4], b was [3]');
// expect(arrayDiff([1, 8, 2], [])).to.eql([1, 8, 2], 'a was [1, 8, 2], b was []');
// expect(arrayDiff([1, 2, 3], [1, 2])).to.eql([3], 'a was [1, 2, 3], b was [1, 2]');


// ✅ SOLUTION
export const arrayDiff = (a: number[], b: number[]): number[] => a.filter(n => !b.includes(n));


// ✅ Checking
console.log(arrayDiff([], [4, 5]));
console.log(arrayDiff([3, 4], [3]));
console.log(arrayDiff([1, 8, 2], []));
console.log(arrayDiff([1, 2, 3], [1, 2]));