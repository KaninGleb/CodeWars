// ❓DESCRIPTION
// Dave has a lot of data he is required to apply filters to, which are simple enough, but he wants a shorter way of doing so.
//
// He wants the following functions to work as expected:
//
// even    // [1,2,3,4,5].even() should return [2,4]
// odd     // [1,2,3,4,5].odd() should return [1,3,5]
// under   // [1,2,3,4,5].under(4) should return [1,2,3]
// over    // [1,2,3,4,5].over(4) should return [5]
// inRange // [1,2,3,4,5].inRange(1,3) should return [1,2,3]
// They should also work when used together, for example:
//
// [1,2,18,19,20,21,22,30,40,50,100].even().inRange(18,30) // should return [18, 20, 22, 30]
// And finally the filters should only accept integer values from an array, for example:
//
// ["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even() // should return [300, 122]
// Note: List with non-numbers will be tested as well.


// ⚙️ TESTS
// assert.deepEqual([1,2,3,4,5].even(),[2,4])
// assert.deepEqual([1,2,3,4,5].odd() ,[1,3,5])
// assert.deepEqual([1,2,3,4,5].under(4),[1,2,3])
// assert.deepEqual([1,2,3,4,5].over(4) ,[5])
// assert.deepEqual([1,2,3,4,5].inRange(1,3),[1,2,3])
// assert.deepEqual([1,2,18,19,20,21,22,30,40,50,100].even().inRange(18,30), [18, 20, 22, 30])
// assert.deepEqual(["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even(),[300, 122])


// ✅ SOLUTION
Array.prototype.even = function() {
    return this.filter(n => Number.isInteger(n) && n % 2 === 0);
}

Array.prototype.odd = function() {
    return this.filter(n => Number.isInteger(n) && n % 2 !== 0);
}

Array.prototype.under = function(limit) {
    return this.filter(n => Number.isInteger(n) && n < limit);
}

Array.prototype.over = function(limit) {
    return this.filter(n => Number.isInteger(n) && n > limit);
}

Array.prototype.inRange = function(start, end) {
    return this.filter(n => Number.isInteger(n) && n >= start && n <= end);
}