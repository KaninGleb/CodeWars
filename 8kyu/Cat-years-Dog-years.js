// ❓DESCRIPTION
// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that


// ⚙️ TESTS
// Test.assertSimilar(humanYearsCatYearsDogYears(1), [1,15,15]);
// Test.assertSimilar(humanYearsCatYearsDogYears(2), [2,24,24]);
// Test.assertSimilar(humanYearsCatYearsDogYears(10), [10,56,64]);


// ✅ SOLUTION
const humanYearsCatYearsDogYears = function (humanYears) {
    let totalCatAge = 0;
    let totalDogAge = 0;

    if (humanYears === 1) {
        totalCatAge = 15;
        totalDogAge = 15;
    } else if (humanYears === 2) {
        totalCatAge = 15 + 9;
        totalDogAge = 15 + 9;
    } else if (humanYears > 2) {
        totalCatAge = 24 + (humanYears - 2) * 4;
        totalDogAge = 24 + (humanYears - 2) * 5;
    }
    return [humanYears, totalCatAge, totalDogAge];
}


// ✅ Checking
console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(10));
console.log(humanYearsCatYearsDogYears(11));