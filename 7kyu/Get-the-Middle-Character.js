// ❓DESCRIPTION
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"


// ⚙️ TESTS
// assert.strictEqual(actual, expected, message);


// ✅ SOLUTION
function getMiddle(s) {
    const midIndex = Math.floor(s.length / 2)
    if (s.length % 2 === 0) {
        return s[midIndex - 1] + s[midIndex]
    } else {
        return s[midIndex]
    }
}


// ✅ Checking
console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));