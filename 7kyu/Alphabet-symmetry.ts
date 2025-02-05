// ❓DESCRIPTION
// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.
//
// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,
//
// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.
//
// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.


// ⚙️ TESTS
// assert.deepEqual(solve(['abode', 'ABc', 'xyzD']), [4, 3, 1]);
// assert.deepEqual(solve(['abide', 'ABc', 'xyz']), [4, 3, 0]);
// assert.deepEqual(solve(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc']), [6, 5, 7]);
// assert.deepEqual(solve(['encode', 'abc', 'xyzD', 'ABmD']), [1, 3, 1, 3]);


// ✅ SOLUTION
export function solve(words: string[]): number[] {
    return words.map(word => {
        const lowerWord = word.toLowerCase();
        let count = 0;

        for (let i = 0; i < lowerWord.length; i++) {
            const alphabetPosition = lowerWord.charCodeAt(i) - 'a'.charCodeAt(0) + 1;

            if (alphabetPosition === i + 1) {
                count++;
            }
        }
        return count;
    })
}


// ✅ Checking
console.log(solve(['abode', 'ABc', 'xyzD']));
console.log(solve(['abide', 'ABc', 'xyz']));
console.log(solve(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc']));
console.log(solve(['encode', 'abc', 'xyzD', 'ABmD']));