// ❓DESCRIPTION
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?


// ⚙️ TESTS
// Test.assertEquals(makeNegative(42), -42);


// ✅ SOLUTION

// Option 1
function makeNegative(num) {
    if (num <= 0) {
        return num;
    } else {
        return -num;
    }
}

// Option 2
function makeNegative(num) {
    return num <= 0 ? num : -num;
}