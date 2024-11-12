// ❓DESCRIPTION
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


// ⚙️ TESTS
// assert.strictEqual(simpleMultiplication(2),16,'Should return given argument times eight...')
// assert.strictEqual(simpleMultiplication(1),9, 'Should return given argument times nine...')
// assert.strictEqual(simpleMultiplication(8),64,'Should return given argument times eight...')
// assert.strictEqual(simpleMultiplication(4),32,'Should return given argument times eight...')
// assert.strictEqual(simpleMultiplication(5),45,'Should return given argument times nine...')


// ✅ SOLUTION
// OPTION 1
function simpleMultiplication(number) {
    if (number % 2 === 0) {
        number *= 8
    } else {
        number *= 9
    }
    return number
}


// OPTION 2
function simpleMultiplication(num) {
    return num % 2 === 0 ? num * 8 : num * 9;
}


// OPTION 3
const simpleMultiplication = num => num % 2 === 0 ? num * 8 : num * 9;


// OPTION 4
const simpleMultiplication = num => num * (num % 2 ? 9 : 8);


// ✅ Checking
console.log(simpleMultiplication(2));
console.log(simpleMultiplication(1));
console.log(simpleMultiplication(8));
console.log(simpleMultiplication(4));
console.log(simpleMultiplication(5));