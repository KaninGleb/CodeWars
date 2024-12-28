// ❓DESCRIPTION
// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
//
// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
// ball1 = new Ball();
// ball2 = new Ball("super");
//
// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"


// ⚙️ TESTS
//  Test.expect(boolean, [optional] message)
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertSimilar(actual, expected, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message)
// Test.assertEquals(new Ball().ballType, "regular");
// Test.assertEquals(new Ball("super").ballType, "super");


// ✅ SOLUTION
const Ball = function(ballType) {
    this.ballType = ballType || 'regular';
}


// ✅ Checking
console.log(new Ball().ballType);
console.log(new Ball("super").ballType);