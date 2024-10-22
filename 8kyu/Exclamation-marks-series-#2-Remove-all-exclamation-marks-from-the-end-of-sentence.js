// ❓DESCRIPTION
// Remove all exclamation marks from the end of sentence.


// ⚙️ TESTS
// doTest("Hi!", "Hi")
// doTest("Hi!!!", "Hi")
// doTest("!Hi", "!Hi")
// doTest("!Hi!", "!Hi")
// doTest("Hi! Hi!", "Hi! Hi")
// doTest("Hi", "Hi")


// ✅ SOLUTION
function remove(string) {  
    return string.replace(/!+$/, '');
}