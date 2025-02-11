// ❓DESCRIPTION
// A number is called Automorphic number if and only if its square ends in the same digits as the number itself. For example, 25 is an automorphic number because its square (625) ends with 25.
//
// Task:
// Given a positive number, determine if it is Automorphic or not. If it is, return "Automorphic", otherwise return "Not!!"
//
// Examples:
// 25 is an automorphic number, because 25 * 25 = 625 ends with 25, so return "Automorphic".
// 13 is not an automorphic number, because 13 * 13 = 169 does not end with 13, so return "Not!!".
// 76 is an automorphic number, because 76 * 76 = 5776 ends with 76, so return "Automorphic".
// 225 is not an automorphic number, because 225 * 225 = 50625 does not end with 225, so return "Not!!".
// 625 is an automorphic number, because 625 * 625 = 390625 ends with 625, so return "Automorphic".
// 1 is an automorphic number, because 1 * 1 = 1 ends with 1, so return "Automorphic".
// 6 is an automorphic number, because 6 * 6 = 36 ends with 6, so return "Automorphic".


// ⚙️ TESTS
// doTest(1, "Automorphic");
// doTest(3, "Not!!");
// doTest(6, "Automorphic");
// doTest(9, "Not!!");
// doTest(25, "Automorphic");
// doTest(53, "Not!!");
// doTest(76, "Automorphic");
// doTest(95, "Not!!");
// doTest(625, "Automorphic");
// doTest(225, "Not!!");
// doTest(100, "Not!!");


// ✅ SOLUTION
export function automorphic(n: number): string {
    const square = (n * n).toString();
    const nStr = n.toString();
    return square.endsWith(nStr) ? 'Automorphic' : 'Not!!';
}


// ✅ Checking
console.log(automorphic(1) === 'Automorphic');
console.log(automorphic(3) === 'Not!!');
console.log(automorphic(6) === 'Automorphic');
console.log(automorphic(9) === 'Not!!');
console.log(automorphic(25) === 'Automorphic');
console.log(automorphic(53) === 'Not!!');
console.log(automorphic(76) === 'Automorphic');
console.log(automorphic(95) === 'Not!!');
console.log(automorphic(625) === 'Automorphic');
console.log(automorphic(225) === 'Not!!');
console.log(automorphic(100) === 'Not!!');