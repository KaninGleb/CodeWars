// ❓DESCRIPTION
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
//
// Examples: (Input --> Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


// ⚙️ TESTS
// assert.deepEqual(number([]), [], 'Empty array should return empty array');
// assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');


// ✅ SOLUTION
// OPTION 1
const number = array => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(`${i + 1}: ${array[i]}`);
    }
    return result;
}


// OPTION 2
const number2 = array => array.map((line, index) => `${index + 1}: ${line}`);


// ✅ Checking
console.log(number([]));
console.log(number(["a", "b", "c"]));

console.log(number2([]));
console.log(number2(["a", "b", "c"]));