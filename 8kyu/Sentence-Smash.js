// ❓DESCRIPTION
// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
// words = ['hello', 'world', 'this', 'is', 'great']
// smash(words) # returns "hello world this is great"
// Assumptions
// You can assume that you are only given words.
// You cannot assume the size of the array.
// You can assume that you do get an array.
// What We're Testing
// We're testing basic loops and string manipulation. This is for beginners who are just learning loops and string manipulation.

// Disclaimer
// This is for beginners so we want to test basic loops and string manipulation. Advanced users should easily be able to do this in one line.


// ⚙️ TESTS
// assert.strictEqual(smash([]), "");
// assert.strictEqual(smash(["hello"]), "hello");
// assert.strictEqual(smash(["hello", "world"]), "hello world");
// assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world");
// assert.strictEqual(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");



// ✅ SOLUTION
// OPTION 1
function smash(words) {
    let result = '';
    for (let i = 0; i < words.length; i++) {
        result += words[i]
        if (i < words.length - 1) {
            result += ' ';
        }
    }
    return result;
}


// OPTION 2
const smash = (words) => words.join(" ");


// ✅ Checking
console.log(smash([]));
console.log(smash(["hello"]));
console.log(smash(["hello", "world"]));
console.log(smash(["hello", "amazing", "world"]));
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));