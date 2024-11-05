// ❓DESCRIPTION
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


// ⚙️ TESTS
// assert.strictEqual(isIsogram("Dermatoglyphics"), true);
// assert.strictEqual(isIsogram("isogram"), true);
// assert.strictEqual(isIsogram("aba"), false, "same chars may not be adjacent");
// assert.strictEqual(isIsogram("moOse"), false, "same chars may not be same case");
// assert.strictEqual(isIsogram("isIsogram"), false);
// assert.strictEqual(isIsogram(""), true, "an empty string is a valid isogram");


// ✅ SOLUTION
function isIsogram(str) {
    const uniqueLetter = {};
    const lowerSrting = str.toLowerCase();

    for (let i = 0; i < lowerSrting.length; i++) {
        const indexTurn = lowerSrting[i];
        if (uniqueLetter[indexTurn]) {
            return false;
        } else {
            uniqueLetter[indexTurn] = true;
        }
    }
    return true;
}


// ✅ Checking
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));