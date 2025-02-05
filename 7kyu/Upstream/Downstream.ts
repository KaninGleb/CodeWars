// ❓DESCRIPTION
// Chingel is practicing for a rowing competition to be held on this saturday. He is trying his best to win this tournament for which he needs to figure out how much time it takes to cover a certain distance.
//
// Input:
// You will be provided with the total distance of the journey, speed of the boat and whether he is going downstream or upstream. The speed of the stream and direction of rowing will be given as a string. Check example test cases!
//
// Output:
// The output returned should be the time taken to cover the distance. If the result has decimal places, round them to 2 fixed positions.


// ⚙️ TESTS
// assert.equal(time(24,10,"Downstream 2"),2);
// assert.equal(time(24,14,"Upstream 2"),2);
// assert.equal(time(54,28,"Downstream 3"),1.74);


// ✅ SOLUTION
export function time(distance: number, boatSpeed: number, stream: String): number {
    const [direction, streamSpeedStr] = stream.split(' ');
    const streamSpeed = Number(streamSpeedStr);

    let totalSpeed: number = 0;

    if (direction === 'Downstream') {
        totalSpeed = boatSpeed + streamSpeed;
    } else if (direction === 'Upstream') {
        totalSpeed = boatSpeed - streamSpeed;
    }

    const result = distance / totalSpeed;

    return Math.round(result * 100) / 100;
}


// ✅ Checking
console.log(time(24, 10, 'Downstream 2'));
console.log(time(24, 14, 'Upstream 2'));
console.log(time(54, 28, 'Downstream 3'));