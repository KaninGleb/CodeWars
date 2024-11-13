// ❓DESCRIPTION
// This function should take two string parameters: a person's name (name) and a quote of theirs (quote), and return a string attributing the quote to the person in the following format:

// '[name] said: "[quote]"'
// For example, if name is 'Grae' and 'quote' is 'Practice makes perfect' then your function should return the string

// 'Grae said: "Practice makes perfect"'
// Unfortunately, something is wrong with the instructions in the function body. Your job is to fix it so the function returns correctly formatted quotes.


// ⚙️ TESTS
// assert.strictEqual(quotable('Grae', 'Practice makes perfect'), 'Grae said: "Practice makes perfect"')
// assert.strictEqual(quotable('Dan', 'Get back to work, Grae'), 'Dan said: "Get back to work, Grae"')
// assert.strictEqual(quotable('Alex', 'Ruby is great fun'), 'Alex said: "Ruby is great fun"')
// assert.strictEqual(quotable('Bethany', 'Yes, way more fun than R'), 'Bethany said: "Yes, way more fun than R"')
// assert.strictEqual(quotable('Darrell', 'What the heck is this thing?'), 'Darrell said: "What the heck is this thing?"')



// ✅ SOLUTION
// OPTION 1
function quotable(name, quote) {
    return `${name} said: "${quote}"`
}


// OPTION 2
const quotable = (name, quote) => `${name} said: "${quote}"`;


// ✅ Checking
console.log(quotable('Grae', 'Practice makes perfect'));
console.log(quotable('Dan', 'Get back to work, Grae'));
console.log(quotable('Alex', 'Ruby is great fun'));
console.log(quotable('Bethany', 'Yes, way more fun than R'));
console.log(quotable('Darrell', 'What the heck is this thing?'));