// ❓DESCRIPTION
// Template Strings:
// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings

// Task:
// Your task is to return the correct string using the Template String Feature.

// Input:
// Two Strings, no validation is needed.

// Output:
// You must output a string containing the two strings with the word ```' are '```
// Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings


// ⚙️ TESTS
// describe('Testing templateStrings', () => {
//     const {assert} = require('chai')
//
//     const doTest = (noun, adjective, expected, clue) => {
//         const actual = templateStrings(noun, adjective)
//         assert.strictEqual(actual, expected, clue)
//     }
//
//     it('Basic tests', () => {
//         doTest('Animals', 'Good', 'Animals are Good', 'templateStrings(\'Animals\', \'Good\')')
//         doTest('You', 'special', 'You are special', 'templateStrings(\'You\', \'special\')')
//         doTest('lives', 'frozen', 'lives are frozen', 'templateStrings(\'lives\', \'frozen\')')
//     })
// })


// ✅ SOLUTION
export const templateStrings = (noun: string, adjective: string): string => {
    return `${noun} are ${adjective}`;
}