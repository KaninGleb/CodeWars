// ❓DESCRIPTION
// Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.


// ⚙️ TESTS
// Test.expect(obj.name === "Palle");
// Test.expect(obj.name === "Dylan");
// Test.expectError("Did not throw expected error", function() {
//     addProperty(obj, "name", "Palle");


// ✅ SOLUTION
function addProperty(obj, prop, value) {
    if (obj.hasOwnProperty(prop)) {
        throw new Error(`Property "${prop}" already exists on the object.`);
    }
    obj[prop] = value;
}


// ✅ Checking
let obj = {};

addProperty(obj, 'name', 'Palle');
console.log(obj.name);

// addProperty(obj, "name", "Dylan"); // Error