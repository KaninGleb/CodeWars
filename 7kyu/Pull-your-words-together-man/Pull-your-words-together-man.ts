// ❓DESCRIPTION
// Your friend Robbie has successfully created an AI that is capable of communicating in English!
//
// Robbie's almost done with the project, however the machine's output isn't working as expected.
// Here's a sample of a sentence that it outputs:
//
// ["this","is","a","sentence"]
//
// Every time that it tries to say a sentence, instead of formatting it in normal English orthography,
// it just outputs a list of words.
//
// Robbie has pulled multiple all-nighters to get this project finished, and he needs some beauty sleep.
// So, he wants you to write the last part of his code, a sentencify function, which takes the output that the machine gives,
// and formats it into proper English orthography.
//
// Your function should:
// Capitalise the first letter of the first word.
// Add a period (.) to the end of the sentence.
// Join the words into a complete string, with spaces.
// Do no other manipulation on the words.
// Here are a few examples of what your function should do:
//
// Input:                                                         Output:
// ["i", "am", "an", "AI"]	                                      "I am an AI."
// ["FIELDS","of","CORN","are","to","be","sown"]	                "FIELDS of CORN are to be sown."
// ["i'm","afraid","I","can't","let","you","do","that"]	          "I'm afraid I can't let you do that."

// (Any translations (eg: to Java/C#/C++/Typescript) would be greatly appreciated!)


// ⚙️ TESTS
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
//
// describe("Fixed Test", () => {
//   it("It should work for some examples.", () => {
//     assert.strictEqual(sentencify(["i", "am", "an", "AI"]), "I am an AI.");
//     assert.strictEqual(sentencify(["yes"]), "Yes.");
//     assert.strictEqual(sentencify(["FIELDS", "of", "CORN", "are", "to", "be", "sown"]), "FIELDS of CORN are to be sown.");
//     assert.strictEqual(sentencify(["i'm", "afraid", "I", "can't", "let", "you", "do", "that"]), "I'm afraid I can't let you do that.");
//   });
//   it("It should work for tricky sentences.", () => {
//     assert.strictEqual(sentencify(["let", "there", "be", "light"]), "Let there be light.");
//     assert.strictEqual(sentencify(["any", "other", "characters,,,", "should", "be", "ignored"]), "Any other characters,,, should be ignored.");
//     assert.strictEqual(sentencify(["extra", "stuff\"''", "stays"]), "Extra stuff\"'' stays.");
//   });
// })


// ✅ SOLUTION
export const sentencify = (words: string[]): string => {
  const sentence = words.join(' ') + '.'
  return sentence.charAt(0).toUpperCase() + sentence.slice(1)
}
