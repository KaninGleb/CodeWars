// ❓DESCRIPTION
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
//     Examples:
// Input: 42145 Output: 54421
//
// Input: 145263 Output: 654321
//
// Input: 123456789 Output: 987654321


// ⚙️ TESTS
// assert.strictEqual(descendingOrder(0), 0)
// assert.strictEqual(descendingOrder(1), 1)
// assert.strictEqual(descendingOrder(111), 111)
// assert.strictEqual(descendingOrder(15), 51)
// assert.strictEqual(descendingOrder(1021), 2110)
// assert.strictEqual(descendingOrder(123456789), 987654321)


// ✅ SOLUTION
// OPTION 1
const descendingOrder = n => {
    const num = n.toString()
        .split('')
        .sort((a, b) => b - a)
        .join('');

    return Number(num);
}


// OPTION 2
const descendingOrder2 = n => Number(n.toString().split('').sort((a, b) => b - a).join(''));


// ✅ Checking
console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));

console.log(descendingOrder2(42145));
console.log(descendingOrder2(145263));
console.log(descendingOrder2(123456789));