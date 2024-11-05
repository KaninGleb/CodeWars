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


// OPTION 2
const fakeBin2 = x => x.split('').map(x => (x < '5' ? '0' : '1')).join('');


// ✅ Checking
console.log(fakeBin("1234567890"));
console.log(fakeBin("5555555555"));
console.log(fakeBin("00000"));

console.log(fakeBin2("1234567890"));
console.log(fakeBin2("5555555555"));
console.log(fakeBin2("00000"));