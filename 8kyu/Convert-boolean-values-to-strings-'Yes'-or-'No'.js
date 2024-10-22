// ❓DESCRIPTION
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


// ⚙️ TESTS
// assert.strictEqual(boolToWord(true), 'Yes')
// assert.strictEqual(boolToWord(false), 'No')


// ✅ SOLUTION
// Option 1
function boolToWord(bool) {
    if (bool) {
        return 'Yes';
    } else {
        return 'No';
    }
}

// Option 2
function boolToWord(bool) {
    return bool ? 'Yes' : 'No';
}