// ❓DESCRIPTION
// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
// Example output:
// Hello, Mr. Spock


// ⚙️ TESTS
// assert.strictEqual(sayHello('Mr. Spock'), 'Hello, Mr. Spock')
// assert.strictEqual(sayHello('Captain Kirk'), 'Hello, Captain Kirk')
// assert.strictEqual(sayHello('Liutenant Uhura'), 'Hello, Liutenant Uhura')
// assert.strictEqual(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy')


// ✅ SOLUTION
function sayHello (name) {
    return `Hello, ${name}`
}


// ✅ Checking
console.log(sayHello('Mr. Spock'));
console.log(sayHello('Captain Kirk'));
console.log(sayHello('Lieutenant Uhura'));
console.log(sayHello('Dr. McCoy'));