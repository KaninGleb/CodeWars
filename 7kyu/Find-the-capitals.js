// ❓DESCRIPTION
// Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]


// ⚙️ TESTS
// assert.deepEqual(capitals('CodEWaRs'), [0,3,4,6] , "Input: \"CodEWaRs\"");
// assert.deepEqual(capitals('aAbB'), [1,3], "Input: \"aAbB\"");
// assert.deepEqual(capitals('AAA'), [0,1,2], "Input: \"AAA\"");
// assert.deepEqual(capitals(''), [], "Input: \"\"");


// ✅ SOLUTION
const capitals = function (word) {
    const indices = [];

    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            indices.push(i);
        }
    }
    return indices;
}


// ✅ Checking
const result = uppercaseIndices("CodEWaRs");
console.log(result);