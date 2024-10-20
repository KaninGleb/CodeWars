// ❓DESCRIPTION
// Each number should be formatted that it is rounded to two decimal places. 
// You don't need to check whether the input is a valid number because only valid numbers are used in the tests.


// ⚙️ TESTS
// Test.assertEquals(twoDecimalPlaces(4.659725356), 4.66, "didn't work for 4.659725356");
// Test.assertEquals(twoDecimalPlaces(173735326.3783732637948948), 173735326.38, "didn't work for 173735326.3783732637948948");
// Test.assertEquals(twoDecimalPlaces(4.653725356), 4.65, "didn't work for 4.653725356");


// ✅ SOLUTION
function twoDecimalPlaces(n) {
    // Option 1
    return Math.round(n * 100) / 100;
    console.log(n);

    // // Option 2
    // function twoDecimalPlaces(n) {
    //     return +n.toFixed(2);
    // }

    // OR
    // const twoDecimalPlaces = n =>  Number(n.toFixed(2))
}
