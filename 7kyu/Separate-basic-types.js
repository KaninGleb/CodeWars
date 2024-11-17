// ❓DESCRIPTION
// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:

// ['a', 1, 2, false, 'b']
// expected output is:

// {
//     number: [1, 2],
//     string: ['a', 'b'],
//     boolean: [false]
// }


// ⚙️ TESTS
// assert.deepEqual(separateTypes(['a', 1, 2, false, 'b']), {number: [1, 2],  string: ['a', 'b'], boolean: [false]});
// assert.deepEqual(separateTypes(['a', 1, 2 ]), {number: [1, 2],  string: ['a']});


// ✅ SOLUTION
// OPTION 1
function separateTypes(input) {
    const resultObj = {
        number: [],
        string: [],
        boolean: [],
        object: []
    }

    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] === 'number') {
            resultObj.number.push(input[i]);
        } else if (typeof input[i] === 'string') {
            resultObj.string.push(input[i]);
        } else if (typeof input[i] === 'boolean') {
            resultObj.boolean.push(input[i]);
        } else if (typeof input[i] === 'object') {
            resultObj.object.push(input[i]);
        }
    }
    return resultObj;
}


// OPTION 2
function separateTypes(input) {
    const resultObj = {};

    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] === 'number') {
            if (!resultObj.number) resultObj.number = [];
            resultObj.number.push(input[i]);
        } else if (typeof input[i] === 'string') {
            if (!resultObj.string) resultObj.string = [];
            resultObj.string.push(input[i]);
        } else if (typeof input[i] === 'boolean') {
            if (!resultObj.boolean) resultObj.boolean = [];
            resultObj.boolean.push(input[i]);
        }
    }
    return resultObj;
}


// ✅ Checking
console.log(separateTypes(['a', 1, 2, false, 'b']));
console.log(separateTypes(['a', 1, 2]));
console.log(separateTypes([1, 'text', true, {
    key: 'value'
}, 42, 'another text']));