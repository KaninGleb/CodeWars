// ❓DESCRIPTION
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//
// Example:
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


// ⚙️ TESTS
// assert.equal(duplicateCount(""), 0);
// assert.equal(duplicateCount("abcde"), 0);
// assert.equal(duplicateCount("aabbcde"), 2);
// assert.equal(duplicateCount("aabBcde"), 2,"should ignore case");
// assert.equal(duplicateCount("Indivisibility"), 1)
// assert.equal(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")


// ✅ SOLUTION
export function duplicateCount(text: string): number{
    if (text.length === 0) return 0;

    const low = text.toLowerCase().split('');
    const counts: { [key: string]: number } = {};

    for (const char of low) {
        if (counts[char]) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }

    let duplicates = 0;
    for (const char in counts) {
        if (counts[char] > 1) {
            duplicates++;
        }
    }

    return duplicates;
}