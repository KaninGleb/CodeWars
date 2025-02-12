// ❓DESCRIPTION
// Your task, is to create N×N multiplication table, of size provided in parameter.
//
// For example, when given size is 3:
//
// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:
//
// [[1,2,3],[2,4,6],[3,6,9]]


// ⚙️ TESTS
// assert.deepStrictEqual(multiplicationTable(1), [[1]])
// assert.deepStrictEqual(multiplicationTable(2), [[1, 2], [2, 4]])
// assert.deepStrictEqual(multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]])


// ✅ SOLUTION
export function multiplicationTable(size: number): number[][] {
    const result = [];

    for (let i = 1; i < size; i++) {
        const arr = [];

        for (let j = 1; j < size; j++) {
            arr.push(i * j);
        }
        result.push(arr);
    }
    return result;
}


// ✅ Checking
console.log(multiplicationTable(1));
console.log(multiplicationTable(2));
console.log(multiplicationTable(3));
console.log(multiplicationTable(4));
console.log(multiplicationTable(5));