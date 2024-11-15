// ❓DESCRIPTION
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


// ⚙️ TESTS
// assert.strictEqual(getCount("abracadabra"), 5) ;


// ✅ SOLUTION
// OPTION 1
// function getCount (str) {
//     vowels = {
//         a: 1,
//         e: 1,
//         i: 1,
//         o: 1,
//         u: 1,
//     }

//     sum = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels[str[i]] == true) {
//             sum++
//         }
//     }
//     return sum
// }


// OPTION 2
function getCount(str) {
    vowels = 'aeiou'
    sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i]) == true) {
            sum++
        }
    }
    return sum
}


// ✅ Checking
console.log(getCount("abracadabra"));