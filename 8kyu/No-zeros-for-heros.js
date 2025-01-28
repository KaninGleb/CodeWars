// ❓DESCRIPTION
// Numbers ending with zeros are boring.
//
// They might be fun in your world, but not here.
//
// Get rid of them. Only the ending ones.
//
// 1450     ->   145
// 960000   ->   96
// 1050     ->   105
// -1050    ->  -105
// Zero alone is fine, don't worry about it. Poor guy anyway


// ⚙️ TESTS
// assert.strictEqual(noBoringZeros(1450), 145)
// assert.strictEqual(noBoringZeros(960000), 96)
// assert.strictEqual(noBoringZeros(1050), 105)
// assert.strictEqual(noBoringZeros(-1050), -105)
// assert.strictEqual(noBoringZeros(-105), -105)
// assert.strictEqual(noBoringZeros(0), 0)


// ✅ SOLUTION
const noBoringZeros = n => {
    if (n === 0) return 0;
    while (n % 10 === 0) {
        n = Math.floor(n / 10);
    }
    return n;
}


// ✅ Checking
console.log(noBoringZeros(1450));
console.log(noBoringZeros(960000));
console.log(noBoringZeros(1050));
console.log(noBoringZeros(-1050));
console.log(noBoringZeros(-105));
console.log(noBoringZeros(0));