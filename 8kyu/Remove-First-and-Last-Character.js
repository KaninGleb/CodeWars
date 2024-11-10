// ❓DESCRIPTION
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.


// ⚙️ TESTS
// assert.strictEqual(removeChar('eloquent'), 'loquen');
// assert.strictEqual(removeChar('country'), 'ountr');
// assert.strictEqual(removeChar('person'), 'erso');
// assert.strictEqual(removeChar('place'), 'lac');
// assert.strictEqual(removeChar('ooopsss'), 'oopss');


// ✅ SOLUTION
function removeChar (str) {
    const charArray = str.split('');

    charArray.shift();
    charArray.pop();

    return charArray.join('');
}