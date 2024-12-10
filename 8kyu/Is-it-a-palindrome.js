// ❓DESCRIPTION
// Write a function that checks if a given string (case insensitive) is a palindrome.
//
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.


// ⚙️ TESTS
// it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
// it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
// it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
// it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
// it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
// it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
// it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
// it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));


// ✅ SOLUTION
const isPalindrome = x => {
    const lowerX = x.toLowerCase();
    return lowerX === lowerX.split('').reverse().join('');
}


// ✅ Checking
console.log("Testing for 'a':", isPalindrome("a") === true);
console.log("Testing for 'aba':", isPalindrome("aba") === true);
console.log("Testing for 'Abba':", isPalindrome("Abba") === true);
console.log("Testing for 'hello':", isPalindrome("hello") === false);
console.log("Testing for 'Bob':", isPalindrome("Bob") === true);
console.log("Testing for 'Madam':", isPalindrome("Madam") === true);
console.log("Testing for 'AbBa':", isPalindrome("AbBa") === true);
console.log("Testing for '':", isPalindrome("") === true);