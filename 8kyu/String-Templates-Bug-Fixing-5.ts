// ❓DESCRIPTION
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!


// ⚙️ TESTS
// assert.equal(buildString('Cheese','Milk','Chocolate'), 'I like Cheese, Milk, Chocolate!')
// assert.equal(buildString('Cheese','Milk'), 'I like Cheese, Milk!')
// assert.equal(buildString('Chocolate'), 'I like Chocolate!')


// ✅ SOLUTION
export function buildString(...template: string[]): string {
    return `I like ${template.join(', ')}!`
}


// ✅ Checking
console.log(buildString('Cheese','Milk','Chocolate'));
console.log(buildString('Cheese','Milk'));
console.log(buildString('Chocolate'));