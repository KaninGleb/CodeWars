// ❓DESCRIPTION
// Definition:
// Jumping number is the number that All adjacent digits in it differ by 1.
//
// Task:
// Given a number, Find if it is Jumping or not .
//
// Notes:
// Number passed is always Positive .
// Return the result as String .
// The difference between ‘9’ and ‘0’ is not considered as 1 .
// All single digit numbers are considered as Jumping numbers.
//
// Input >> Output Examples:
// jumpingNumber(9) ==> return "Jumping!!"
// It's single-digit number
// jumpingNumber(79) ==> return "Not!!"
// Adjacent digits don't differ by 1
// jumpingNumber(23) ==> return "Jumping!!"
// Adjacent digits differ by 1
// jumpingNumber(556847) ==> return "Not!!"
// Adjacent digits don't differ by 1
// jumpingNumber(4343456) ==> return "Jumping!!"
// Adjacent digits differ by 1
// jumpingNumber(89098) ==> return "Not!!"
// Adjacent digits don't differ by 1
// jumpingNumber(32) ==> return "Jumping!!"
// Adjacent digits differ by 1


// ⚙️ TESTS
// it("Testing for 1", () => assert.strictEqual(jumpingNumber(1), "Jumping!!"));
// it("Testing for 7", () => assert.strictEqual(jumpingNumber(7), "Jumping!!"));
// it("Testing for 9", () => assert.strictEqual(jumpingNumber(9), "Jumping!!"));
// it("Testing for 23", () => assert.strictEqual(jumpingNumber(23), "Jumping!!"));
// it("Testing for 32", () => assert.strictEqual(jumpingNumber(32), "Jumping!!"));
// it("Testing for 79", () => assert.strictEqual(jumpingNumber(79), "Not!!"));
// it("Testing for 98", () => assert.strictEqual(jumpingNumber(98), "Jumping!!"));
// it("Testing for 8987", () => assert.strictEqual(jumpingNumber(8987), "Jumping!!"));
// it("Testing for 4343456", () => assert.strictEqual(jumpingNumber(4343456), "Jumping!!"));
// it("Testing for 98789876", () => assert.strictEqual(jumpingNumber(98789876), "Jumping!!"));


// ✅ SOLUTION
export function jumpingNumber(n: number) {
    const nStr = n.toString();

    if (nStr.length === 1) return "Jumping!!";

    for (let i = 0; i < nStr.length - 1; i++) {
        const currentDigit: number = +nStr[i];
        const nextDigit: number = +nStr[i + 1];

        if (Math.abs(currentDigit - nextDigit) !== 1) {
            return 'Not!!'
        }
    }
    return 'Jumping!!';
}



// ✅ Checking
console.log((jumpingNumber(1)));
console.log((jumpingNumber(7)));
console.log((jumpingNumber(9)));
console.log((jumpingNumber(23)));
console.log((jumpingNumber(32)));
console.log((jumpingNumber(79)));
console.log((jumpingNumber(98)));
console.log((jumpingNumber(8987)));
console.log((jumpingNumber(4343456)));
console.log((jumpingNumber(98789876)));