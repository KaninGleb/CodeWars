// ❓DESCRIPTION
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
//
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


// ⚙️ TESTS
// assert.strictEqual(isPangram("The quick brown fox jumps over the lazy dog."), true);
// assert.strictEqual(isPangram("This is not a pangram."), false);


// ✅ SOLUTION
export const isPangram = (phrase: string): boolean => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    phrase = phrase.toLowerCase().replace(/[^a-z]/g, '');

    for (const letter of alphabet) {
        if (!phrase.includes(letter)) return false;
    }
    return true;
}