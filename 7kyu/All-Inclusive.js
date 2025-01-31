"use strict";
// ❓DESCRIPTION
// Input:
// a string strng
// an array of strings arr
//
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
// a boolean true if all rotations of strng are included in arr
// false otherwise
//
// Examples:
// contain_all_rots(
//     "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true
//
// contain_all_rots(
//     "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
// Note:
//     Though not correct in a mathematical sense
//
// we will consider that there are no rotations of strng == ""
// and for any array arr: contain_all_rots("", arr) --> true
// ⚙️ TESTS
// assert.strictEqual(containAllRots("", []), true);
// assert.strictEqual(containAllRots("", ["bsjq", "qbsj"]), true);
// assert.strictEqual(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]), true);
// assert.strictEqual(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]), false);
// ✅ SOLUTION
function containAllRots(str, arr) {
    if (str === "")
        return true;
    const rotations = [];
    for (let i = 0; i < str.length; i++) {
        rotations.push(str.slice(i) + str.slice(0, i));
    }
    return rotations.every(rot => arr.includes(rot));
}
// ✅ Checking
console.log(containAllRots("", []));
console.log(containAllRots("", ["bsjq", "qbsj"]));
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]));
console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]));
