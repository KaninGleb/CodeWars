// ❓DESCRIPTION
// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
//
// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
//
// Example:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "M"       -> 1000
// "CD"      ->  400
// "XC"      ->   90
// "XL"      ->   40
// "I"       ->    1
//
// Help:
// Symbol       Value
// I            1
// V            5
// X            10
// L            50
// C            100
// D            500
// M            1,000


// ⚙️ TESTS
// assert.equal(solution('XXI'), 21);
// assert.equal(solution('I'), 1);
// assert.equal(solution('IV'), 4);
// assert.equal(solution('MMVIII'), 2008);
// assert.equal(solution('MDCLXVI'), 1666);


// ✅ SOLUTION
// OPTION 1
export function solution (roman: string): number {
    const numerals: { [key: string]: number } = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    let total = 0;
    let prevValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const currValue = numerals[roman[i]];

        if (currValue < prevValue) {
            total -= currValue;
        } else {
            total += currValue;
        }
        prevValue = currValue;
    }
    return total;
}


// OPTION 2
export function solution2 (roman: string): number {
    const numerals: { [key: string]: number } = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    return roman
        .split('')
        .map(n => numerals[n])
        .reduce((total, currentValue, i, arr) => {
            if (currentValue < (arr[i + 1] || 0)) {
                return total - currentValue;
            }
            return total + currentValue;
        }, 0);
}