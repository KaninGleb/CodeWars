// ❓DESCRIPTION
// When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.
// Input: 1
// Output: "One".
// If your language supports it, try using a switch statement.


// ⚙️ TESTS
// assert.strictEqual(switchItUp(1),"One");
// assert.strictEqual(switchItUp(3),"Three");
// assert.strictEqual(switchItUp(5),"Five");


// ✅ SOLUTION

// OPTION 1
function switchItUp(number) {
    switch (number) {
        case 0:
            return 'Zero';
        case 1:
            return 'One';
        case 2:
            return 'Two';
        case 3:
            return 'Three';
        case 4:
            return 'Four';
        case 5:
            return 'Five';
        case 6:
            return 'Six';
        case 7:
            return 'Seven';
        case 8:
            return 'Eight';
        case 9:
            return 'Nine';
    }
}

// OPTION 2
function switchItUp(number) {
    const numberWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    return numberWords[number];
}