// ❓DESCRIPTION
// Given a string of space separated words, return the longest word.
// If there are multiple longest words, return the rightmost longest word.
//
// Examples:
// "red white blue"  =>  "white"
// "red blue gold"   =>  "gold"


// ⚙️ TESTS
// it('"lonely"',        () => assert.strictEqual(longestWord('lonely') , 'lonely'))
// it('"a pair"',        () => assert.strictEqual(longestWord('a pair') , 'pair'))
// it('"a b c d e fgh"', () => assert.strictEqual(longestWord('a b c d e fgh') , 'fgh'))
// it('"one two three"', () => assert.strictEqual(longestWord('one two three') , 'three'))
// it('"red blue grey"', () => assert.strictEqual(longestWord('red blue grey') , 'grey'))


// ✅ SOLUTION
// OPTION 1
export const longestWord = (stringOfWords: string): string => {
    const words = stringOfWords.split(' ');
    let longest = '';

    for (const word of words) {
        if (word.length >= longest.length) {
            longest = word;
        }
    }
    return longest;
}

// OPTION 2
export const longestWord2 = (str: string): string => {
    return str.split(' ').sort((a, b) => a.length - b.length).pop() || '';
}