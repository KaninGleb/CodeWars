// ❓DESCRIPTION
// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.

// Good luck!


// ⚙️ TESTS
// assert.strictEqual(howManyDalmatians(26), "More than a handful!");
// assert.strictEqual(howManyDalmatians(8), "Hardly any");
// assert.strictEqual(howManyDalmatians(14), "More than a handful!");
// assert.strictEqual(howManyDalmatians(80), "Woah that's a lot of dogs!");
// assert.strictEqual(howManyDalmatians(100), "Woah that's a lot of dogs!");
// assert.strictEqual(howManyDalmatians(101), "101 DALMATIANS!!!");


// ✅ SOLUTION
// OPTION 1
function howManyDalmatians(number) {
    const dogs = [
        "Hardly any",
        "More than a handful!",
        "Woah that's a lot of dogs!",
        "101 DALMATIANS!!!"
    ];

    if (number < 10) {
        return dogs[0];
    } else if (number <= 50) {
        return dogs[1];
    } else if (number === 101) {
        return dogs[3];
    } else {
        return dogs[2];
    }
}


// OPTION 2
function howManyDalmatians(number) {
    return number < 10 ? "Hardly any" :
           number <= 50 ? "More than a handful!" :
           number === 101 ? "101 DALMATIANS!!!" :
           "Woah that's a lot of dogs!";
}


// ✅ Checking
console.log(howManyDalmatians(26));
console.log(howManyDalmatians(8));
console.log(howManyDalmatians(14));
console.log(howManyDalmatians(80));
console.log(howManyDalmatians(100));
console.log(howManyDalmatians(101));