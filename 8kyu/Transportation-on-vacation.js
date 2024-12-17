// ❓DESCRIPTION
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
//
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
//
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//
// Write a code that gives out the total amount for different days(d).


// ⚙️ TESTS
// assert.strictEqual(rentalCarCost(1), 40);
// assert.strictEqual(rentalCarCost(2), 80);
// assert.strictEqual(rentalCarCost(3), 100);
// assert.strictEqual(rentalCarCost(4), 140);
// assert.strictEqual(rentalCarCost(5), 180);
// assert.strictEqual(rentalCarCost(6), 220);
// assert.strictEqual(rentalCarCost(7), 230);
// assert.strictEqual(rentalCarCost(8), 270);
// assert.strictEqual(rentalCarCost(9), 310);
// assert.strictEqual(rentalCarCost(10), 350);


// ✅ SOLUTION
const rentalCarCost = d => {
    const cost = 40;
    let totalCost = d * cost;
    if (d >= 7) {
        totalCost -= 50;
    } else if (d >= 3) {
        totalCost -= 20;
    }
    return totalCost;
}


// ✅ Checking
console.log(rentalCarCost(1));
console.log(rentalCarCost(2));
console.log(rentalCarCost(3));
console.log(rentalCarCost(4));
console.log(rentalCarCost(5));
console.log(rentalCarCost(6));
console.log(rentalCarCost(7));
console.log(rentalCarCost(8));
console.log(rentalCarCost(9));
console.log(rentalCarCost(10));