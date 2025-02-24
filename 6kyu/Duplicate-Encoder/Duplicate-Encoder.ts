// ❓DESCRIPTION
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
// Examples:
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
//
// Notes:
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


// ⚙️ TESTS
// assert.strictEqual(duplicateEncode("din"),"(((");
// assert.strictEqual(duplicateEncode("recede"),"()()()");
// assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
// assert.strictEqual(duplicateEncode("(( @"),"))((");


// ✅ SOLUTION
export function duplicateEncode(word: string): string {
    const low = word.toLowerCase();
    const count: Record<string, number> = {};

    for (const char of low) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

    let output = '';
    for (const char of low) {
        output += count[char] === 1 ? '(' : ')';
    }
    return output;
}