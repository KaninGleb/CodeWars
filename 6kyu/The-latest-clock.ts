// ❓DESCRIPTION
// Write a function which receives 4 digits and returns the latest time of day that can be built with those digits.
//
// The time should be in HH:MM format.
//
// Examples:
// digits: 1, 9, 8, 3 => result: "19:38"
// digits: 9, 1, 2, 5 => result: "21:59" (19:25 is also a valid time, but 21:59 is later)
//
// Notes:
// Result should be a valid 24-hour time, between 00:00 and 23:59.
// Only inputs which have valid answers are tested.


// ⚙️ TESTS
// assert.strictEqual(latestClock(1, 9, 8, 3), "19:38");
// assert.strictEqual(latestClock(9, 1, 2, 5), "21:59");


// ✅ SOLUTION
export function latestClock(a: number, b: number, c: number, d: number): string {
    const digits = [a, b, c, d];
    let latestTime = '';

    const mix = (arr: number[]) => {
        if (arr.length === 1) return [arr];

        const result: number[][] = [];

        arr.forEach((num, index) => {
            const rest = arr.slice(0, index).concat(arr.slice(index + 1));
            const perms = mix(rest);
            perms.forEach(perm => result.push([num, ...perm]));
        })
        return result;
    }

    const exchanges = mix(digits);

    for (const change of exchanges) {
        const hour = change[0] * 10 + change[1];
        const minute = change[2] * 10 + change[3];

        if (hour < 24 && minute < 60) {
            const time = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`;

            if (time > latestTime) {
                latestTime = time
            }
        }
    }
    return latestTime;
}


// ✅ Checking
console.log(latestClock(1, 9, 8, 3));
console.log(latestClock(9, 1, 2, 5));