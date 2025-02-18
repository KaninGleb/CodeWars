// ❓DESCRIPTION
// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
// Examples:
// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"


// ⚙️ TESTS
// assert.strictEqual(spinWords("Welcome"), "emocleW");
// assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
// assert.strictEqual(spinWords("This is a test"), "This is a test");
// assert.strictEqual(spinWords("This is another test"), "This is rehtona test");
// assert.strictEqual(spinWords("You are almost to the last test"), "You are tsomla to the last test");
// assert.strictEqual(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
// assert.strictEqual(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");


// ✅ SOLUTION
export function spinWords(words: string): string {
    const splited = words.split(' ');
    const result = [];

    for (let i = 0; i < splited.length; i++) {
        if (splited[i].length >= 5) {
            result.push(splited[i].split('').reverse().join(''));
        } else {
            result.push(splited[i])
        }
    }
    return result.join(' ');
}


// ✅ Checking
console.log(spinWords("Welcome") === "emocleW");
console.log(spinWords("Hey fellow warriors") === "Hey wollef sroirraw");
console.log(spinWords("This is a test") === "This is a test");
console.log(spinWords("This is another test") === "This is rehtona test");
console.log(spinWords("You are almost to the last test") === "You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more") === "Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one") === "ylsuoireS this is the last one");