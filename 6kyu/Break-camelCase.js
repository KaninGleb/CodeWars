// ❓DESCRIPTION
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


// ⚙️ TESTS
// assert.strictEqual(solution(""), "", `solution("")`);
// assert.strictEqual(solution("camelCasing"), "camel Casing", `solution("camelCasing")`);
// assert.strictEqual(solution("camelCasingTest"), "camel Casing Test", `solution("camelCasingTest")`);


// ✅ SOLUTION
function solution(s) {
    return s.split('').reduce((acc, char) => {
        if (char === char.toUpperCase() && acc.length > 0) {
            acc.push(' ');
        }
        acc.push(char);
        return acc;
    }, []).join('');
}


// ✅ Checking
console.log(solution(""));
console.log(solution("camelCasing"));
console.log(solution("JavaScript"));
console.log(solution("camelCasingTest"));