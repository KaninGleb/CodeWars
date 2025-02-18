// ❓DESCRIPTION
// Christmas Present Calculator
// After we find out if Santa can save Christmas there is another task to face.
//
// Santa's little helper aren't sick anymore. They are ready to give away presents again. But some of them are still weak.
// This leads to more productive elves than others.
//
// How many presents can Santa distribute this Christmas?
//
// Your Task:
// You will get two inputs.
// One dictionary with the productivity of each elf like the following:
//
// {"Santa": 1, "elf_1": 1, "elf_2": 1, "elf_3": 2, "elf_4": 3}
//
// and a string array with the time needed for each present like the following:
//
// "hh:mm:ss"
//
// The productivity describes the workload an elf can do each day:
//
// //productivity 1 = 24 hours each day
// //productivity 2 = 48 hours each day
// ...
//
// Return the number of present they can distribute at maximum.
//
// Note that:
//
// They have only 24 hours
// They try to give out as much as presents as possible (the ones with less time first)
// All the elves can work on multiple tasks. You can count it as one work capacity


// ⚙️ TESTS
// var dict = {"Santa": 1, "elf_1": 1, "elf_2": 2}; //4 * 24 hours of productivity
// var pres = ["01:00:00", "06:00:00", "12:00:00", "18:00:00", "24:00:00", "36:00:00"];
// //pres[0] + pres[1] + pres[2] + pres[3] + pres[4] + pres[5] = 97 hours
// Test.assertEquals(countPresents(dict, pres), 5);


// ✅ SOLUTION
function countPresents(prod: object, presents: Array<string>) {
    let totalProductivity = 0;
    for (const productivity of Object.values(prod)) {
        totalProductivity += productivity * 24 * 3600;
    }

    const presentTimesInSeconds = presents.map(time => {
        const [hh, mm, ss] = time.split(':').map(Number);
        return (hh * 3600) + (mm * 60) + ss;
    })
    presentTimesInSeconds.sort()

    let totalTimeSpent = 0;
    let count = 0;
    for (const time of presentTimesInSeconds) {
        if (totalTimeSpent + time <= totalProductivity) {
            totalTimeSpent += time;
            count++;
        } else {
            break;
        }
    }
    return count;
}


// ✅ Checking
const dict = {"Santa": 1, "elf_1": 1, "elf_2": 2};
const pres = ["01:00:00", "06:00:00", "12:00:00", "18:00:00", "24:00:00", "36:00:00"];

console.log(countPresents(dict, pres), '--- 5');