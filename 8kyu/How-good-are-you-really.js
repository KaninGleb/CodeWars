// ❓DESCRIPTION
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!


// ⚙️ TESTS
// assert.strictEqual(betterThanAverage([2, 3], 5), true);
// assert.strictEqual(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
// assert.strictEqual(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
// assert.strictEqual(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false);
// assert.strictEqual(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false);


// ✅ SOLUTION
// OPTION 1
function betterThanAverage(classPoints, yourPoints) {
    let summary = 0;
    for (let i = 0; i < classPoints.length; i++) {
        summary += classPoints[i];
    }
    let average = summary / classPoints.length;
    if (average < yourPoints) {
        return true;
    } else {
        return false;
    }
}


// OPTION 2
function betterThanAverage(classPoints, yourPoints) {
    const totalPoints = classPoints.reduce((sum, score) => sum + score, 0);
    const averagePoints = totalPoints / classPoints.length;
    return yourPoints > averagePoints;
}


// ✅ Checking
console.log(betterThanAverage([2, 3], 5));
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21));