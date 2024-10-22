// ❓DESCRIPTION
// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.


// ⚙️ TESTS
// Test.assertEquals(combat(100, 5), 95);
// Test.assertEquals(combat(92, 8), 84);
// Test.assertEquals(combat(20, 30), 0, "Health cannot go below 0");


// ✅ SOLUTION
// OPTION 1
function combat(health, damage) {
    if (health - damage < 0) {
        return 0;
    } else {
        return health - damage;
    }
}

// OPTION 2
function combat1(health, damage) {
    return Math.max(health - damage, 0);
}