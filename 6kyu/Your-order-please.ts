// ❓DESCRIPTION
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
//
// Examples:
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


// ⚙️ TESTS
// assert.equal(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
// assert.equal(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
// assert.equal(order(""), "");


// ✅ SOLUTION
// OPTION 1
export function order(words: string): string {
    if (words === '') return '';
    const word = words.split(' ');

    const sorted = word.sort((a, b) => {
        const aNum = Number(a.split("").find(n => n >= '1' && n <= '9'));
        const bNum = Number(b.split("").find(n => n >= '1' && n <= '9'));

        return aNum - bNum;
    })
    return sorted.join(' ');
}


// ✅ Checking
console.log(order('is2 Thi1s T4est 3a'));
console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
console.log(order(''));