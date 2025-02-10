// ❓DESCRIPTION
// Strong number is a number with the sum of the factorial of its digits is equal to the number itself.
//
// For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.
//
// Task:
// Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".
//
// Examples:
// 1 is a strong number, because 1! = 1, so return "STRONG!!!!".
// 123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to 123, so return "Not Strong !!".
// 145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145, so return "STRONG!!!!".
// 150 is not a strong number, because 1! + 5! + 0! = 122 is not equal to 150, so return "Not Strong !!".


// ⚙️ TESTS
// assert.strictEqual(strong(1), 'STRONG!!!!');
// assert.strictEqual(strong(2), 'STRONG!!!!');
// assert.strictEqual(strong(145), 'STRONG!!!!');
// assert.strictEqual(strong(7), 'Not Strong !!');
// assert.strictEqual(strong(93), 'Not Strong !!');
// assert.strictEqual(strong(185), 'Not Strong !!');


// ✅ SOLUTION
// OPTION 1
function factorial (n: number): number {
    return n ? n * factorial(n - 1) : 1;
}

export const strongNumber = (num: number): string => {
    const numStr = (num + "").split('').map(Number);
    const strongCheck = num === numStr.reduce((a, b) => a + factorial(b), 0)

    return strongCheck ? 'STRONG!!!!' : 'Not Strong !!';
}


// OPTION 2
export const strongNumber2 = (num: number): string => {
    function factorial2 (n: number): number {
        return n ? n * factorial2(n - 1) : 1;
    }

    const numStr = (num + "").split('').map(Number);
    const strongCheck = num === numStr.reduce((a, b) => a + factorial2(b), 0)

    return strongCheck ? 'STRONG!!!!' : 'Not Strong !!';
}


// ✅ Checking
console.log(strongNumber(1) === 'STRONG!!!!');
console.log(strongNumber(2) === 'STRONG!!!!');
console.log(strongNumber(145) === 'STRONG!!!!');
console.log(strongNumber(7) === 'Not Strong !!');
console.log(strongNumber(93) === 'Not Strong !!');
console.log(strongNumber(185) === 'Not Strong !!');

console.log(strongNumber2(1) === 'STRONG!!!!');
console.log(strongNumber2(2) === 'STRONG!!!!');
console.log(strongNumber2(145) === 'STRONG!!!!');
console.log(strongNumber2(7) === 'Not Strong !!');
console.log(strongNumber2(93) === 'Not Strong !!');
console.log(strongNumber2(185) === 'Not Strong !!');