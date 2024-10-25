// ❓DESCRIPTION
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9.


// ⚙️ TESTS
// assert.strictEqual(squareSum([1, 2]), 5);
// assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
// assert.strictEqual(squareSum([]), 0);


// ✅ SOLUTION
function squareSum(numbers){
    let sum = 0; 

    for(let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (num || num === 0) {
            sum += num * num;
        }
    }
    return sum;
}

const result = squareSum([1, 2, 2]);
console.log(result);