// ❓DESCRIPTION
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
//
// Example(Input --> Output):
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
//
// Note: String will have at least one element; words will always be separated by a space.


// ⚙️ TESTS
// assert.deepEqual(addLength('apple ban'), ["apple 5", "ban 3"]);
// assert.deepEqual(addLength('you will win'), ["you 3", "will 4", "win 3"]);


// ✅ SOLUTION
export function addLength(str: string): string[] {
    const result: string[] = [];

    const words = str.split(' ');
    words.forEach((word) => {
        result.push(`${word} ${word.length}`);
    })
    return result;
}


// ✅ Checking
console.log(addLength('apple ban'));
console.log(addLength('you will win'));