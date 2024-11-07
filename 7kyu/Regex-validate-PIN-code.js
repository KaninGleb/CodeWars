// ❓DESCRIPTION
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


// ⚙️ TESTS
// Test.assertEquals(validatePIN("1"), false, "Wrong output for '1'")
// Test.assertEquals(validatePIN("12"), false, "Wrong output for '12'")
// Test.assertEquals(validatePIN("123"), false, "Wrong output for '123'")
// Test.assertEquals(validatePIN("12345"), false, "Wrong output for '12345'")
// Test.assertEquals(validatePIN("1234567"), false, "Wrong output for '1234567'")
// Test.assertEquals(validatePIN("-1234"), false, "Wrong output for '-1234'")
// Test.assertEquals(validatePIN("1.234"), false, "Wrong output for '1.234'")
// Test.assertEquals(validatePIN("-1.234"), false, "Wrong output for '-1.234'")
// Test.assertEquals(validatePIN("00000000"), false, "Wrong output for '00000000'")


// ✅ SOLUTION
// OPTION 1
function validatePIN(pin) {
    if (pin.length === 4 || pin.length === 6) {
        for (let i = 0; i < pin.length; i++) {
            if (pin[i] < '0' || pin[i] > '9') {
                return false;
            }
        }
        return true;
    }
    return false;
}


// OPTION 2
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}


// ✅ Checking
console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("a234"));
console.log(validatePIN("0000"));
console.log(validatePIN("123456"));
console.log(validatePIN("1234567"));
console.log(validatePIN("-1234"));
console.log(validatePIN("1.234"));
console.log(validatePIN("-1.234"));
console.log(validatePIN("00000000"));