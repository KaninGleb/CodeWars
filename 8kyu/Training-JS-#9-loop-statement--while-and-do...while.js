// ❓DESCRIPTION
// Complete function padIt, which accepts 2 parameters:

// 1. str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
// 2. n: a number indicating how many times to pad the string.
// Behaviour
// You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

// Finally, return the padded string.


// ⚙️ TESTS
// Test.assertSimilar(padIt("a", 1), "*a");
// Test.assertSimilar(padIt("a", 2), "*a*");
// Test.assertSimilar(padIt("a", 3), "**a*");
// Test.assertSimilar(padIt("a", 4), "**a**");
// Test.assertSimilar(padIt("a", 5), "***a**");


// ✅ SOLUTION
// OPTION 1
function padIt(str, n) {
    let i = 0;
    while (i < n) {
        if (i % 2 ===0) {
            str = '*' + str;
        } else {
            str += '*';
        }
        i++
    }
    return str;
}


// OPTION 2
function padIt(str, n) {
    for (let i = 0; i < n; i++) {
        if (i % 2 ===0) {
            str = '*' + str;
        } else {
            str += '*';
        }
    }
    return str;
}


// OPTION 3
function padIt(str, n) {
    const leftStars = '*'.repeat(Math.ceil(n / 2));
    const rightStars = '*'.repeat(Math.floor(n / 2));
    return leftStars + str + rightStars;
}


// ✅ Checking
console.log(padIt("a", 1));
console.log(padIt("a", 2));
console.log(padIt("a", 3));
console.log(padIt("a", 4));
console.log(padIt("a", 5));
console.log(padIt("a", 6));