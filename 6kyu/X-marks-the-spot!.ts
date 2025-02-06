// ❓DESCRIPTION
// Write a function x(n) that takes in a number n and returns an nxn array with an X in the middle. The X will be represented by 1's and the rest will be 0's.
// E.g.
//
// x(5) === [[1, 0, 0, 0, 1],
//           [0, 1, 0, 1, 0],
//           [0, 0, 1, 0, 0],
//           [0, 1, 0, 1, 0],
//           [1, 0, 0, 0, 1]];
//
// x(6) === [[1, 0, 0, 0, 0, 1],
//           [0, 1, 0, 0, 1, 0],
//           [0, 0, 1, 1, 0, 0],
//           [0, 0, 1, 1, 0, 0],
//           [0, 1, 0, 0, 1, 0],
//           [1, 0, 0, 0, 0, 1]];


// ⚙️ TESTS
// assert.deepEqual(x(1), [[1]], 'n=1');
// assert.deepEqual(x(2), [[1, 1], [1, 1]], 'n=2');
// assert.deepEqual(x(3), [[1, 0, 1], [0, 1, 0], [1, 0, 1]], 'n=3');
// assert.deepEqual(x(4), [[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1]], 'n=4');
// assert.deepEqual(x(5), [[1, 0, 0, 0, 1], [0, 1, 0, 1, 0], [0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [1, 0, 0, 0, 1]], 'n=5');
// assert.deepEqual(x(6), [[1, 0, 0, 0, 0, 1], [0, 1, 0, 0, 1, 0], [0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0], [0, 1, 0, 0, 1, 0], [1, 0, 0, 0, 0, 1]], 'n=6');


// ✅ SOLUTION
export function x(n: number): number[][] {
    const arr: number[][] = [];

    for (let i = 0; i < n; i++) {
        const row: number[] = new Array(n).fill(0);
        row[i] = 1;
        row[n - 1 - i] = 1;
        arr.push(row);
    }
    return arr;
}


// ✅ Checking
console.log(x(1), 'n=1');
console.log(x(4), 'n=4');
console.log(x(6), 'n=6');