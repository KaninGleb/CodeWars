// ❓DESCRIPTION
// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.


// ⚙️ TESTS
// doTest("", "");
// doTest("   @@@", "   @@@");
// doTest("HelloWorld!", "HEllOWOrld!");
// doTest("Sunday", "SUndAy");
// doTest("Codewars", "COdEwArs");
// doTest("Monday", "MOndAy");
// doTest("Friday", "FrIdAy");
// doTest("abracadabra", "AbrAcAdAbrA");
// doTest("AbrAcAdAbrA", "AbrAcAdAbrA");
// doTest("ABRACADABRA", "ABRACADABRA");
// doTest("aBRaCaDaBRa", "ABRACADABRA");


// ✅ SOLUTION
function swap(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';

    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            result += string[i].toUpperCase();
        } else {
            result += string[i];
        }
    }
    return result;
}


// ✅ Checking
console.log(swap("Hello World!"));
console.log(swap("Sunday"));
console.log(swap("Codewars"));
console.log(swap("Monday"));
console.log(swap("Friday"));
console.log(swap("abracadabra"));
console.log(swap("ABRACADABRA"));
console.log(swap("aBRaCaDaBRa"));