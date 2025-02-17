// ❓DESCRIPTION
// Can Santa save Christmas?
// Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.
//
// But he has only 24 hours left. Can he do it?
//
// Your Task:
// You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .


// ⚙️ TESTS
// doTest(["00:30:00", "02:30:00", "00:15:00"], true);
// doTest([], true);
// doTest(["04:30:00", "02:00:00", "01:30:00", "16:00:00"], true);
// doTest(["12:00:00", "12:00:00"], true);
// doTest(["12:00:00", "12:00:01"], false);
// doTest(["06:00:00","12:00:00","06:30:00"], false);


// ✅ SOLUTION
function determineTime (durations: string[]): boolean {
    const totalSecInDay = 24 * 60 * 60;
    let totalSec = 0;

    for (const duration of durations) {
        const [hours, minutes, seconds] = duration.split(':').map(Number);
        totalSec += hours * 3600 + minutes * 60 + seconds;
    }
    return totalSec <= totalSecInDay;
}


// ✅ Checking
console.log(determineTime(["00:30:00", "02:30:00", "00:15:00"]));
console.log(determineTime([]));
console.log(determineTime(["04:30:00", "02:00:00", "01:30:00", "16:00:00"]));
console.log(determineTime(["12:00:00", "12:00:00"]));
console.log(determineTime(["12:00:00", "12:00:01"]));
console.log(determineTime(["06:00:00","12:00:00","06:30:00"]));