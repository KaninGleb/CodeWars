// ❓DESCRIPTION
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
//
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
//
// Note: The function accepts an integer and returns an integer.
//
// Happy Coding!


// ⚙️ TESTS
// assert.strictEqual(solution.Kata.squareDigits(9119), 811181);
// assert.strictEqual(solution.Kata.squareDigits(0), 0);


// ✅ SOLUTION
export function solution (num: number) {
    const digits = num.toString().split('')

    for (let i = 0; i < digits.length; i++) {
        const digit = Number(digits[i]);
        digits[i] = (digit * digit).toString();
    }
    return digits.join('')
}


// ✅ Checking
console.log(solution(9119), '--- 811181');
console.log(solution(0), '--- 0');