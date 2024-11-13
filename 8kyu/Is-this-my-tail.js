// ❓DESCRIPTION
// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.


// ⚙️ TESTS
// assert.strictEqual(correctTail("Fox", "x"), true);
// assert.strictEqual(correctTail("Rhino", "o"), true);
// assert.strictEqual(correctTail("Meerkat", "t"), true); 


// ✅ SOLUTION
function correctTail(body, tail) {
    sub = body.substr(body.length - tail.length);
    if (sub === tail) {
        return true
    } else {
        return false
    }
}


// ✅ Checking
console.log(correctTail("Fox", "x"));
console.log(correctTail("Rhino", "o"));
console.log(correctTail("Meerkat", "t"));