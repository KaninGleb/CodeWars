// ❓DESCRIPTION
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


// ⚙️ TESTS
// assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
// assert.strictEqual(reverseWords('apple'), 'elppa');
// assert.strictEqual(reverseWords('a b c d'), 'a b c d');
// assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');


// ✅ SOLUTION
function reverseWords(str) {
    const words  = str.split(' ');
    const reversedWords  = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const reverse = word.split('').reverse().join('');
        reversedWords.push(reverse);
    }
    return reversedWords.join(' ');
}


// ✅ Checking
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
console.log(reverseWords('apple'));
console.log(reverseWords('a b c d'));
console.log(reverseWords('double  spaced  words'));