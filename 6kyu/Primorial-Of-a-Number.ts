// ❓DESCRIPTION
// Definition (Primorial Of a Number)
// Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.
//
// Task:
// Given a number N , calculate its primorial.
//
// Notes:
// Only positive numbers will be passed (N > 0).
//
// Input >> Output Examples:
// 1- numPrimorial (3) ==> return (30)
// Explanation:
// Since the passed number is (3) ,Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .
// Mathematically written as , P3# = 30 .
//
// 2- numPrimorial (5) ==> return (2310)
// Explanation:
// Since the passed number is (5) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 = 2310 .
// Mathematically written as , P5# = 2310 .
//
// 3- numPrimorial (6) ==> return (30030)
// Explanation:
// Since the passed number is (6) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 * 13 = 30030 .
// Mathematically written as , P6# = 30030 .


// ⚙️ TESTS
// assert.strictEqual(numPrimorial(3), 30);
// assert.strictEqual(numPrimorial(4), 210);
// assert.strictEqual(numPrimorial(5), 2310);
// assert.strictEqual(numPrimorial(8), 9699690);
// assert.strictEqual(numPrimorial(9), 223092870);


// ✅ SOLUTION
const isPrime = (n: number) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

export function numPrimorial (n: number): number {
    let prod = 1;
    let count = 0;
    let i = 2;

    while (count < n) {
        if (isPrime(i)) {
            prod *= i;
            count++;
        }
        i++;
    }
    return prod;
}


// ✅ Checking
console.log(numPrimorial(3), '--- 30');
console.log(numPrimorial(4), '--- 210');
console.log(numPrimorial(5), '--- 2310');
console.log(numPrimorial(8), '--- 9699690');
console.log(numPrimorial(9), '--- 223092870');