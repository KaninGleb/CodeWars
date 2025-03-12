// ❓DESCRIPTION
// Given a positive integer as input, return the output as a string in the following format:
//
// Each digit (from left to right) multiplied by the corresponding power of 10, so that the sum equals the input number.
//
// If the digit is zero, exclude it from the output;
// For the last digit, just use the digit itself, without *1.
//
// Examples:
// 0     -->  ""
// 56    -->  "5*10+6"
// 60    -->  "6*10"
// 999   -->  "9*100+9*10+9"
// 10004 -->  "1*10000+4"
// Note: input >= 0


// ⚙️ TESTS
// Test.assertEquals(simplify(8964631), "8*1000000+9*100000+6*10000+4*1000+6*100+3*10+1");
// Test.assertEquals(simplify(660), "6*100+6*10");
// Test.assertEquals(simplify(56),"5*10+6");
// Test.assertEquals(simplify(600), "6*100")


// ✅ SOLUTION
export const simplify = (num: number): string => {
    const numStr = num.toString();
    const length = numStr.length;
    const parts = [];

    for (let i = 0; i < length; i++) {
        const digit = numStr[i];
        const powerOfTen = length - i - 1;

        if (digit !== '0') {
            if (i < length - 1) {
                parts.push(`${digit}*10${powerOfTen > 1 ? '0'.repeat((powerOfTen - 1)) : ''}`);
            } else {
                parts.push(digit);
            }
        }
    }
    return parts.join('+');
}