// ❓DESCRIPTION
// Task:
// Create a function that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.
//
// Examples:
// "amazon" --> true
// "apple" --> false
// "banana" --> true
//
// Note:
// Arguments consist of only lowercase letters.


// ⚙️ TESTS
// const { assert } = require("chai");
//
// describe("isAlt", () => {
//     it("Basic Tests", () => {
//         tester("amazon", true);
//         tester("apple", false);
//         tester("banana", true);
//     });
// });
//
// function tester(input, expected) {
//     const err_msg = `Failed for input: ${input}\n`;
//     const actual = isAlt(input);
//     assert.strictEqual(actual, expected, err_msg);
// }


// ✅ SOLUTION
export function isAlt (word: string): boolean {
    const vowels = 'aeiou';

    const isVowel = (char: string) => vowels.includes(char);

    for (let i = 0; i < word.length - 1; i++) {
        const currentVowel = isVowel(word[i]);
        const nextVowel = isVowel(word[i + 1]);

        if (currentVowel === nextVowel) return false;
    }
    return true;
}