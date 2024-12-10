// ❓DESCRIPTION
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


// ⚙️ TESTS
// assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
// assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
// assert.strictEqual(findShort("Let's travel abroad shall we"), 2);


// ✅ SOLUTION
// OPTION 1
const findShort = s => {
    const splitS = s.split(' ');
    let minLength = splitS[0].length;

    for (let i = 1; i < splitS.length; i++) {
        const wordLength = splitS[i].length;
        if (wordLength < minLength) {
            minLength = wordLength;
        }
    }
    return minLength;
}


// OPTION 2
const findShort2 = s => Math.min(...s.split(' ').map(s => s.length));


// ✅ Checking
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("turns out random test cases are easier than writing out basic ones"));
console.log(findShort("Let's travel abroad shall we"));

console.log(findShort2("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort2("turns out random test cases are easier than writing out basic ones"));
console.log(findShort2("Let's travel abroad shall we"));