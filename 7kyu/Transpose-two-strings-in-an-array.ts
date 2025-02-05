// ❓DESCRIPTION
// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.
//
// e.g. transposeTwoStrings(['Hello','World']);
//
// should return:
// H W
// e o
// l r
// l l
// o d
//
// A few things to note:
// There should be one space in between the two characters
// You don't have to modify the case (i.e. no need to change to upper or lower)
// If one string is longer than the other, there should be a space where the character would be


// ⚙️ TESTS
// doTest(['Hello', 'World'], "H W\ne o\nl r\nl l\no d");
// doTest(['joey', 'louise'], "j l\no o\ne u\ny i\n  s\n  e");
// doTest(['a', 'cat'], "a c\n  a\n  t");
// doTest(['cat', ''], "c  \na  \nt  ");
// doTest(['!a!a!', '?b?b'], "! ?\na b\n! ?\na b\n!  ");


// ✅ SOLUTION
export function transposeTwoStrings(arr: string[]): string {
    const [str1, str2] = arr;
    const maxLength = Math.max(str1.length, str2.length);

    let result: string[] = [];

    for (let i = 0; i < maxLength; i++) {
        const char1 = str1[i] || ' ';
        const char2 = str2[i] || ' ';
        result.push(`${char1} ${char2}`);
    }
    return result.join('\n');
}


// ✅ Checking
console.log(transposeTwoStrings(['Hello', 'World']));
console.log(transposeTwoStrings(['joey', 'louise']));
console.log(transposeTwoStrings(['a', 'cat']));
console.log(transposeTwoStrings(['cat', '']));
console.log(transposeTwoStrings(['!a!a!', '?b?b']));