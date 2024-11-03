// ❓DESCRIPTION
// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:
// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.


// ⚙️ TESTS
// testDeepEqual(combine(objA, objB), { a: 13, b: 20, c: 36, d: 3 })
// testDeepEqual(combine(objA, objC), { a: 15, b: 20, c: 30, d: 11, e: 8 })
// testDeepEqual(combine(objA, objB, objC), { a: 18, b: 20, c: 36, d: 14, e: 8 })
// testDeepEqual(combine(objA, objC, objD), { a: 15, b: 20, c: 33, d: 11, e: 8 })
// testDeepEqual(combine({}, {}, {}), {})
// testDeepEqual(combine(objA, objC, {}), { a: 15, b: 20, c: 30, d: 11, e: 8 })


// ✅ SOLUTION
function combine(...objects) {
    const result = {};

    for (const obj of objects) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (result.hasOwnProperty(key)) {
                    result[key] += obj[key];
                } else {
                    result[key] = obj[key];
                }
            }
        }
    }
    return result;
}


// ✅ Checking
const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 2, d: 11, e: 8 };
const objD = { c: 3 };


console.log(combine(objA, objB)); 
console.log(combine(objA, objC));
console.log(combine(objA, objB, objC));
console.log(combine(objA, objC, objD));
console.log(combine({}, {}, {}));
console.log(combine(objA, objC, {}));