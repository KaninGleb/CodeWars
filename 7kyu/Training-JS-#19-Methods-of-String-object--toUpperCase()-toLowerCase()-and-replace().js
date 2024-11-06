// ❓DESCRIPTION
// Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.
// We translate the sentence into an alien language according to the following rules:
// Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

// for example:
// alienLanguage("My name is John") should return "My NAMe Is JOHn"
// alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
// alienLanguage("Hello World") should return "HELLo WORLd"

// A small hint: The first conversion of the entire string will make the code easier


// ⚙️ TESTS
// Test.assertSimilar(alienLanguage("My name is John"), "My NAMe Is JOHn");
// Test.assertSimilar(alienLanguage("this is an example"), "THIs Is An EXAMPLe");
// Test.assertSimilar(alienLanguage("Hello World"), "HELLo WORLd");
// Test.assertSimilar(alienLanguage("HELLO WORLD"), "HELLo WORLd");


// ✅ SOLUTION
function alienLanguage (str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {
            words[i] = word.slice(0, -1).toUpperCase() + word[word.length - 1].toLowerCase();
        }
    }
    return words.join(' ');
}


// ✅ Checking
console.log(alienLanguage("My name is John"));
console.log(alienLanguage("this is an example"));
console.log(alienLanguage("Hello World"));
console.log(alienLanguage("HELLO WORLD"));