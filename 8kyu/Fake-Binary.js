// ❓DESCRIPTION
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string


// ⚙️ TESTS
// assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
// assert.strictEqual(fakeBin('509321967506747'), '101000111101101');
// assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');


// ✅ SOLUTION
// OPTION 1
function fakeBin(x){
    let result = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i] < '5') {
            result += '0';
        } else {
            result += '1';
        }
    }
    return result;
}


// ✅ Checking
console.log(fakeBin("1234567890")); // Вывод: "0001111000"
console.log(fakeBin("5555555555")); // Вывод: "1111111111"
console.log(fakeBin("00000"));       // Вывод: "00000"