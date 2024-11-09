// ❓DESCRIPTION
// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


// ⚙️ TESTS
// assert.strictEqual(reverseWords("hello world!"), "world! hello")
// assert.strictEqual(reverseWords("yoda doesn't speak like this"), "this like speak doesn't yoda")
// assert.strictEqual(reverseWords("foobar"), "foobar")
// assert.strictEqual(reverseWords("kata editor"), "editor kata")
// assert.strictEqual(reverseWords("row row row your boat"), "boat your row row row")
// assert.strictEqual(reverseWords(""), "")


// ✅ SOLUTION
function reverseWords(str) {
    const words = str.split(' ');
    const reversedWords = [];

    for (let i = words.length - 1; i >= 0; i--) {
        reversedWords.push(words[i]);
    }
    return reversedWords.join(' ');
}


// ✅ Checking
console.log(reverseWords("hello world!"));
console.log(reverseWords("yoda doesn't speak like this"));
console.log(reverseWords("foobar"));
console.log(reverseWords("kata editor"));
console.log(reverseWords("row row row your boat"));
console.log(reverseWords(""));