// ❓DESCRIPTION
// Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

// For example:
// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];

// After adding the property the result should be:
// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     usersAnswer: null
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//     corAnswer: 0,
//     usersAnswer: null
// }];
// The questions array is already defined for you and is not the same as the one in the example.


// ⚙️ TESTS
// Test.expect(questions[0].usersAnswer === null); 


// ✅ SOLUTION
let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];


// OPTION 1
function addUserAnswer (questions) {
    questions.forEach(function(question) {
        question.usersAnswer = null;
    })
}


// OPTION 2
function addUserAnswer (questions) {
    questions.forEach(question => {
        question.usersAnswer = null;
    })
}


// ✅ Checking
addUserAnswer(questions);
console.log(questions);