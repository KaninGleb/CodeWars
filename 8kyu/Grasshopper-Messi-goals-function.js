// ❓DESCRIPTION
// Messi goals function
// Messi is a soccer player with goals in three leagues:
// LaLiga
// Copa del Rey
// Champions

// Complete the function to return his total number of goals in all three leagues.
// Note: the input will always be valid.

// For example:
// 5, 10, 2  -->  17


// ⚙️ TESTS
// Test.assertEquals(goals(0,0,0), 0)
// Test.assertEquals(goals(43, 10, 5), 58)


// ✅ SOLUTION
const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals;


// ✅ Checking
console.log(goals(0, 0, 0), '--- 0')
console.log(goals(43, 10, 5), '--- 58')