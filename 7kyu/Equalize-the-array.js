// ❓DESCRIPTION
// No description!!!
// Input :: [10,20,25,0]
// Output :: ["+0", "+10", "+15", "-10"]


// ⚙️ TESTS
// assert.deepEqual(equalize([20,30,35,10]),(["+0","+10","+15","-10"]));
// assert.deepEqual(equalize([]),([]));
// assert.deepEqual(equalize([10,12,24,50,0,15,20]),(["+0","+2","+14","+40","-10","+5","+10"]));


// ✅ SOLUTION
// OPTION 1
const equalize = arr => {
    const result = [];
    if (arr.length === 0) return result;

    const firstElement = arr[0];
    result.push("+0");

    for (let i = 1; i < arr.length; i++) {
        const difference = arr[i] - firstElement;
        result.push(difference >= 0 ? `+${difference}` : `-${-difference}`);
    }
    return result;
}


// OPTION 2
const equalize2 = arr => {
    const result = [];
    const firstElement = arr[0];

    for (const el of arr) {
        const difference = el - firstElement;
        result.push(difference >= 0 ? `+${difference}` : `-${-difference}`);
    }
    return result;
}


// ✅ Checking
console.log(equalize([20, 30, 35, 10]));
console.log(equalize([]));
console.log(equalize([10, 12, 24, 50, 0, 15, 20]));

console.log(equalize2([20, 30, 35, 10]));
console.log(equalize2([]));
console.log(equalize2([10, 12, 24, 50, 0, 15, 20]));