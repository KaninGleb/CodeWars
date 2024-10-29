// ❓DESCRIPTION
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


// ⚙️ TESTS
// assert.deepEqual(digitize(35231), [1, 3, 2, 5, 3]);
// assert.deepEqual(digitize(0), [0]);


// ✅ SOLUTION
function digitize(n) {
    let array = [];
    const strNumber = String(n);

    for (let i = strNumber.length - 1; i >= 0; i--) {
        array.push(Number(strNumber[i]));
    }
    return array;
}


console.log(JSON.stringify(digitize(35231)));
console.log(JSON.stringify(digitize(0)));