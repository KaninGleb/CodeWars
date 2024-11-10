// ❓DESCRIPTION
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)


// ⚙️ TESTS
// assert.strictEqual(hero(10, 5), true);
// assert.strictEqual(hero(7, 4), false);
// assert.strictEqual(hero(4, 5), false);
// assert.strictEqual(hero(100, 40), true);
// assert.strictEqual(hero(1500, 751), false);
// assert.strictEqual(hero(0, 1), false);


// ✅ SOLUTION
// OPTION 1
function hero(bullets, dragons) {
    if (bullets >= dragons * 2) {
        return true;
    } else {
        return false;
    }
}


// OPTION 2
function hero(bullets, dragons) {
    return bullets >= dragons * 2 ? true : false;
}


// ✅ Checking
console.log(hero(10, 5));
console.log(hero(7, 4));
console.log(hero(4, 5));
console.log(hero(100, 40));
console.log(hero(1500, 751));
console.log(hero(0, 1));