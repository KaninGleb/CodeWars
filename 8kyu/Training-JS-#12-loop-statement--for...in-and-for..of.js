// ❓DESCRIPTION
// The function giveMeFive accepts 1 parameter, obj, which is an object.

// Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

// At the end, return your array.

// You should use for..in in your code, otherwise your solution may not pass this kata.


// ⚙️ TESTS
// Test.assertSimilar(giveMeFive({Our:"earth",is:"a",beautyful:"world"}),["earth","world"]);
// Test.assertSimilar(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}),["Ihave","money","model"]);
// Test.assertSimilar(giveMeFive({Pears:"than",apple:"sweet"}),["Pears","apple","sweet"]);


// ✅ SOLUTION
function giveMeFive(obj) {
    let arr = [];
    for (const key in obj) {
        if (key.length === 5) {
            arr.push(key);
        }
        if (obj[key].length === 5) {
            arr.push(obj[key]);
        }
    }
    return arr;
}


// ✅ Checking
console.log(giveMeFive({Our: "earth", is: "a", beautyful: "world"}));
console.log(giveMeFive({Ihave: "enough", money: "to", buy: "a", car: "model"}));
console.log(giveMeFive({Pears: "than", apple: "sweet"}));