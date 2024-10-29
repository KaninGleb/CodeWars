// ❓DESCRIPTION
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// ⚙️ TESTS
// assert.strictEqual(solution('world'), 'dlrow');
// assert.strictEqual(solution('hello'), 'olleh');
// assert.strictEqual(solution(''), '');
// assert.strictEqual(solution('h'), 'h');


// ✅ SOLUTION
// OPTION 1
function solution(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}


// OPTION 2 
function solution(str) {
    return str.split("").reverse().join("");
}


// OPTION 3
function solution(str) {
    let reversed = "";
    for (let i of str) {
        reversed = i + reversed;
    }
    return reversed;
}


console.log(solution('world'));
console.log(solution('hello'));
console.log(solution(''));
console.log(solution('h'));