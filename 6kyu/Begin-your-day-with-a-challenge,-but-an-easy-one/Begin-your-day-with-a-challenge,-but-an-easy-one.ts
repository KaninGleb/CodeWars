// ❓DESCRIPTION
// There are no explanations. You have to create the code that gives the following results in Python, Ruby, and Haskell:
//
// one_two_three(0) == [0, 0]
// one_two_three(1) == [1, 1]
// one_two_three(2) == [2, 11]
// one_two_three(3) == [3, 111]
// one_two_three(19) == [991, 1111111111111111111]
// And it should give the following results in Javascript, Scala, D, Go, Rust, C, and Java:
//
// oneTwoThree(0) == ['0', '0']
// oneTwoThree(1) == ['1', '1']
// oneTwoThree(3) == ['3', '111']
// oneTwoThree(19) == ['991', '1111111111111111111']


// ⚙️ TESTS
// const { assert, config } = require('chai');
// config.truncateThreshold = 0;
//
// describe('Tests', () => {
//     const test = (input, expected) => {
//         assert.deepEqual(oneTwoThree(input), expected, `Test failed for input (n = ${input})`);
//     };
//
//     it('Sample Tests', () => {
//         const tests = [
//             [0,  ['0', '0']],
//             [1,  ['1', '1']],
//             [2,  ['2', '11']],
//             [3,  ['3', '111']],
//             [19, ['991', '1111111111111111111']],
//         ];
//         for (const [input, expected] of tests) {
//             test(input, expected);
//         }
//     });
// });


// ✅ SOLUTION
export const oneTwoThree = (n: number): string[] => {
    let firstValue;
    if (n < 9) {
        firstValue = n.toString();
    } else {
        const nines = Math.floor(n / 9);
        const remain = n % 9;
        firstValue = '9'.repeat(nines) + (remain !== 0 ? remain.toString() : '');
    }

    const secondValue = n === 0 ? '0' : '1'.repeat(n);
    return [firstValue, secondValue];
}