// ❓DESCRIPTION
// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?


// ⚙️ TESTS
// Test.assertEquals(arr[0], 2, "Failed swapping numbers")
// Test.assertEquals(arr[1], 1, "Failed swapping numbers")


// ✅ SOLUTION
function swapValues(arr) {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
}

let arr = [1, 2];
swapValues(arr);


// ✅ Checking
console.log(arr[0]);
console.log(arr[1]);