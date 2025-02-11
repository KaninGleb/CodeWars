// ❓DESCRIPTION
// Definition:
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
//
// Task:
// Given a number, Find if it is Disarium or not .
//
// Notes:
// Number passed is always Positive .
// Return the result as String

// Input >> Output Examples:
// disariumNumber(89) ==> return "Disarium !!"
// disariumNumber(564) ==> return "Not !!"


// ⚙️ TESTS
// assert.strictEqual(disariumNumber(89),"Disarium !!");
// assert.strictEqual(disariumNumber(564),"Not !!");
// assert.strictEqual(disariumNumber(1024),"Not !!");
// assert.strictEqual(disariumNumber(135),"Disarium !!");
// assert.strictEqual(disariumNumber(136586),"Not !!");


// ✅ SOLUTION
export function disariumNumber(n: number): string {
    const sum = n.toString().split('').reduce((a, b, i) => {
        return a + Math.pow(+b, i + 1)
    }, 0)
    return sum === n ? 'Disarium !!' : 'Not !!';
}


// ✅ Checking
console.log(disariumNumber(89) === 'Disarium !!');
console.log(disariumNumber(564) === 'Not !!');
console.log(disariumNumber(1024) === 'Not !!');
console.log(disariumNumber(135) === 'Disarium !!');
console.log(disariumNumber(136586) === 'Not !!');