// ❓DESCRIPTION
// Definition:
// A number is a Special Number if its digits only consists of 0, 1, 2, 3, 4 or 5
//
// Given a number, determine if it is a special number or not.
//
// Notes:
// The number passed will be positive (N > 0)
//
// All single-digit numbers within the interval [1:5] are considered special numbers
//
// Examples:
// 2 ==> return "Special!!"
// 9 ==> return "NOT!!"
// 23 ==> return "Special!!"
// 39 ==> return "NOT!!"
// 59 ==> return "NOT!!"
// 513 ==> return "Special!!"
// 709 ==> return "NOT!!"


// ⚙️ TESTS
// assert.strictEqual(specialNumber(2), "Special!!");
// assert.strictEqual(specialNumber(3), "Special!!");
// assert.strictEqual(specialNumber(6), "NOT!!");
// assert.strictEqual(specialNumber(9), "NOT!!");
// assert.strictEqual(specialNumber(11), "Special!!");
// assert.strictEqual(specialNumber(55), "Special!!");
// assert.strictEqual(specialNumber(26), "NOT!!");
// assert.strictEqual(specialNumber(92), "NOT!!");
// assert.strictEqual(specialNumber(25432), "Special!!");
// assert.strictEqual(specialNumber(2783), "NOT!!");


// ✅ SOLUTION
// OPTION 1
export function specialNumber (n: number) {
    const num = (n + '').split('').map(Number);
    for (let i = 0; i < num.length; i++) {
        if (num[i] > 5) {
            return "NOT!!"
        }
    }
    return "Special!!"
}


// OPTION 2
export function specialNumber2 (n: number) {
    const digits = (n + '');
    for (const digit of digits) {
        if (digit > '5') {
            return "NOT!!"
        }
    }
    return "Special!!"
}


// OPTION 3
export function specialNumber3 (n: number): string {
    const isSpecial = /^[0-5]+$/.test(n.toString());
    return isSpecial ? "Special!!" : "NOT!!";
}


// ✅ Checking
console.log(specialNumber(2) === "Special!!");
console.log(specialNumber(3) === "Special!!");
console.log(specialNumber(6) === "NOT!!");
console.log(specialNumber(9) === "NOT!!");

console.log(specialNumber2(2) === "Special!!");
console.log(specialNumber2(3) === "Special!!");
console.log(specialNumber2(6) === "NOT!!");
console.log(specialNumber2(9) === "NOT!!");

console.log(specialNumber3(2) === "Special!!");
console.log(specialNumber3(3) === "Special!!");
console.log(specialNumber3(6) === "NOT!!");
console.log(specialNumber3(9) === "NOT!!");