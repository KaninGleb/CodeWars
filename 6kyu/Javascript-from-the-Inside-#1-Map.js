// ❓DESCRIPTION
// #Description Your task is to implement our beloved Array.prototype.map function from a scratch, and yes, it has to be inside the Array's prototype. Don't know what a 'prototype' is? This could help you a little as well as this kata.

// Moving on, the defaults for Array.prototype.map, Array.prototype.reduce, Array.prototype.reduceRight and Array.prototype.forEach will be banned, in other words you'll have to create map from scratch.

// var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var multiply_by_two = function(x) { return x * 2 };
// var one_to_nine_doubled = one_to_nine.map(multiply_by_two);
// // Expected
// [2, 4, 6, 8, 10, 12, 16, 18]
// #What do I want? I want you to create this basic, yet, really important algorithm from scratch by yourself.

// The Basics

// Array.prototype.map is a function that takes a callback function and an object as 'context'
// The callback function should receive the current item, it's index and array object itself
// The context will be this inside the callback function
// NOTE

// You should take into account that an array created by [] and a new Array(length) are entirely different on the content they posses and you should take into account that at the moment of building your solution.
// A better illustration for that:
// [1, 2, 3]; // { '0': 1, '1': 2, '2': 3, length: 3 }
// new Array(3); // { length: 3 }

// [1, 2, 3].concat([4]); // { '0': 1, '1': 2, '2': 3, '3': 4, length: 4 }
// new Array(3).concat([4]); // { '3': 4, length: 4 }
// That said, you should only apply the callback function to the items that the array posses
// That said, Have a happy Coding.

// #Oh, I almost forgot Your implementation for this map function should not modify the current array

// var base_array = [1, 2, 3, 4, 5];
// var mapped_array = base_array.map(function(item) { return item + 2 });

// console.log(base_array); // [1, 2, 3, 4, 5]
// console.log(mapped_array); // [3, 4, 5, 6, 7]


// ⚙️ TESTS
// Test.assertNotEquals(mapped_to_same, base_array, "Oh no! I didn't return a new array.");
// Test.assertDeepEquals(mapped_to_same, base_array, "Oh no! I didn't map appropriately.");
// Test.assertDeepEquals(empty_map, empty_array, "Oh no! it didn't work for empty arrays.");
// Test.assertDeepEquals(single_map, single_array, "Oh no! it didn't work for arrays with a single element.");
// Test.assertDeepEquals(base_array, [1, 2, 3, 4, 5], "Oh no! base_array was altered by your map.");
// Test.assertDeepEquals(plus_two, [3, 4, 5, 6, 7], "Oh no!");
// Test.assertDeepEquals(squared_array, [1, 4, 9, 16, 25], "Oh no!, it didn't square every element.");
// Test.assertDeepEquals(to_the_power_of_three_array, [1, 8, 27, 64, 125], "Oh no!, it didn't power every element by three");
// Test.assertDeepEquals(plus_two_and_index, [3, 5, 7, 9, 11], "Oh no! it did not add the indexes appropriately.");
// Test.assertDeepEquals(divided_by_index, [Infinity, 2, 1.5, 1.3333333333333333, 1.25], "Oh no! it did not divided by the correspondant index!");
// Test.assertDeepEquals(array_indexes, [0, 1, 2, 3, 4], "Oh no! The index are not properly enumerated.");
// Test.assertDeepEquals(array_times_five, [[1, 2, 3, 4, 5],[1, 2, 3, 4, 5],[1, 2, 3, 4, 5],[1, 2, 3, 4, 5],[1, 2, 3, 4, 5]], "Oh no! it was expecting array to be returned 5 times.");
// Test.assertDeepEquals(plus_two_from_array, [3, 4, 5, 6, 7], "Oh no! It looks like array[index] didn't return what it should!");
// Test.assertDeepEquals(sum_with_context, [5, 7, 9], "Oh no! It looks like 'this' was not the context.");
// Test.assertDeepEquals(sum_with_context, [2, 4, 6], "Oh no! It looks like the callback received the wrong array!.");
// Test.assertDeepEquals(array_of_two, [, , ], "Oh no! It looks like your map doesn't work well with a new Array()");
// Test.assertDeepEquals(array_of_two_and_one, [, , 1], "On on! It looks like your map is not skipping the 'holes' inside a new Array(length) Object");


// ✅ SOLUTION
Array.prototype.map = function (callback, thisArg) {
    const result = new Array(this.length);

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            result[i] = callback.call(thisArg, this[i], i, this);
        }
    }
    return result;
}


// ✅ Checking
const one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const multiply_by_two = function(x) { return x * 2; };
const one_to_nine_doubled = one_to_nine.map(multiply_by_two);

console.log(one_to_nine); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(one_to_nine_doubled); // [2, 4, 6, 8, 10, 12, 14, 16, 18]