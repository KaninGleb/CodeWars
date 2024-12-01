// ❓DESCRIPTION
// This kata is all about adding numbers.
//
// You will create a function named add. This function will return the sum of all the arguments. Sounds easy, doesn't it??
//
// Well here's the twist. The inputs will gradually increase with their index as parameter to the function.
//
// add(3,4,5);
// /*
// returns ( 3 * 1 ) + ( 4 * 2 ) + ( 5 * 3 ) = 26
// */
// Remember the function will return 0 if no arguments are passed.
//
// Example
// add(); //=> 0
// add(1,2,3); //=> 14
// add(1,4,-5,5); //=> 14


// ⚙️ TESTS
// Test.assertEquals(add(100,200,300),1400)


// ✅ SOLUTION
// OPTION 1
const add = (...num) => {
    let result = 0;

    for (let i = 0; i < num.length; i++) {
        result += (num[i] * (i + 1));
    }
    return result;
}


// OPTION 2
const add2 = (...num) => {
    let result = 0;

    num.forEach((item, i) => {
        result += (num[i] * (i + 1));
    })

    return result;
}


// ✅ Checking
console.log(add(100, 200, 300));
console.log(add2(100, 200, 300));