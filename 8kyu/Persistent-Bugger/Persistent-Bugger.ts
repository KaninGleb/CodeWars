// ❓DESCRIPTION
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
//
// For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)


// ⚙️ TESTS
// assert.strictEqual(persistence(39),3);
// assert.strictEqual(persistence(4),0);
// assert.strictEqual(persistence(25),2);
// assert.strictEqual(persistence(999),4);


// ✅ SOLUTION
// OPTION 1
export function persistence(num: number): number {
    const multiply = (num: number) => {
        return num
            .toString()
            .split('')
            .reduce((a, b) => a * +b, 1);
    }

    let count = 0;

    while (num > 9) {
        num = multiply(num);
        count++;
    }

    return count;
}


// OPTION 2
export function persistence2(num: number): number {
    let count = 0;

    while (num > 9) {
        num = num
            .toString()
            .split('')
            .reduce((a, b) => a * Number(b), 1);
        count++;
    }
    return count;
}