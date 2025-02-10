// ❓DESCRIPTION
// A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.
// If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)
//
// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.
//
// The task:
// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.
//
// Examples:
// 7 ==> return "Balanced"
// 295591 ==> return "Not Balanced"
// 959 ==> return "Balanced"
// 27102983 ==> return "Not Balanced"


// ⚙️ TESTS
// it("Testing for 7", () => assert.strictEqual(balancedNum(7), "Balanced"));
// it("Testing for 959", () => assert.strictEqual(balancedNum(959), "Balanced"));
// it("Testing for 13", () => assert.strictEqual(balancedNum(13), "Balanced"));
// it("Testing for 432", () => assert.strictEqual(balancedNum(432), "Not Balanced"));
// it("Testing for 424", () => assert.strictEqual(balancedNum(424), "Balanced"));
// it("Testing for 1024", () => assert.strictEqual(balancedNum(1024), "Not Balanced"));
// it("Testing for 66545", () => assert.strictEqual(balancedNum(66545), "Not Balanced"));
// it("Testing for 295591", () => assert.strictEqual(balancedNum(295591), "Not Balanced"));
// it("Testing for 1230987", () => assert.strictEqual(balancedNum(1230987), "Not Balanced"));
// it("Testing for 56239814", () => assert.strictEqual(balancedNum(56239814), "Balanced"));


// ✅ SOLUTION
export function balancedNum(num: number): string {
    const numStr = num.toString();
    const len = numStr.length;
    let leftSum = 0;
    let rightSum = 0;

    const mid = Math.floor(len / 2);

    if (len % 2 === 0) {
        for (let i = 0; i < mid - 1; i++) {
            leftSum += +numStr[i];
        }
        for (let i = mid + 1; i < len; i++) {
            rightSum += +numStr[i];
        }
    } else {
        for (let i = 0; i < mid; i++) {
            leftSum += +numStr[i];
        }
        for (let i = mid + 1; i < len; i++) {
            rightSum += +numStr[i];
        }
    }
    return leftSum === rightSum ? 'Balanced' : 'Not Balanced';
}


// ✅ Checking
console.log(balancedNum(7));
console.log(balancedNum(959));
console.log(balancedNum(13));
console.log(balancedNum(432));
console.log(balancedNum(424));
console.log(balancedNum(1024));
console.log(balancedNum(66545));
console.log(balancedNum(295591));
console.log(balancedNum(1230987));
console.log(balancedNum(56239814));