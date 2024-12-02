// ❓DESCRIPTION
// Create an identity matrix of the specified size ( >= 0 ).
//
// Some examples:
// (1)  =>  [[1]]
//
// (2) => [ [1,0],
//          [0,1] ]
//
//        [ [1,0,0,0,0],
//          [0,1,0,0,0],
// (5) =>   [0,0,1,0,0],
//          [0,0,0,1,0],
//          [0,0,0,0,1] ]


// ⚙️ TESTS
// const test_it = (input, expected) => {
//     it(`getMatrix(${input}) should return ${JSON.stringify(expected)}`, () => {
//         assert.deepEqual(getMatrix(input), expected, `getMatrix(${input}) should return ${JSON.stringify(expected)}`);
//     });
// };
//
// describe("Sample tests", () => {
//     test_it(0, []);
//     test_it(1, [[1]]);
//     test_it(2, [[1, 0], [0, 1]]);
//     test_it(5, [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]);
// });


// ✅ SOLUTION
const getMatrix = number => {
    const matrix = Array.from({length: number}, () => Array(number).fill(0));

    for (let i = 0; i < number; i++) {
        matrix[i][i] = 1;
    }

    return matrix;
}


// ✅ Checking
console.log(getMatrix(0));
console.log(getMatrix(1));
console.log(getMatrix(2));
console.log(getMatrix(5));
console.log(getMatrix(6));