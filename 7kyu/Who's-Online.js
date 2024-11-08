// ❓DESCRIPTION
// You have a group chat application, but who is online!?
// You want to show your users which of their friends are online and available to chat!
// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
// The input data has the following structure:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]
// The corresponding output should look as follows:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.
// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).


// ⚙️ TESTS
// const Test = require('@codewars/test-compat');

// describe('Given examples', function () {
//     var friends

//     it('Example test one of each', function () {
//         friends = [{
//             username: 'David',
//             status: 'online',
//             lastActivity: 10
//         }, {
//             username: 'Lucy',
//             status: 'offline',
//             lastActivity: 22
//         }, {
//             username: 'Bob',
//             status: 'online',
//             lastActivity: 104
//         }]
//         Test.assertDeepEquals(whosOnline(friends), {
//             online: ['David'],
//             offline: ['Lucy'],
//             away: ['Bob']
//         }, 'Wrong result for example one of each')
//     })

//     it('Example test no one online', function () {
//         friends = [{
//             username: 'Lucy',
//             status: 'offline',
//             lastActivity: 22
//         }, {
//             username: 'Bob',
//             status: 'online',
//             lastActivity: 104
//         }]

//         Test.assertDeepEquals(whosOnline(friends), {
//             offline: ['Lucy'],
//             away: ['Bob']
//         }, 'Wrong result for example no one online')
//     })
// })


// ✅ SOLUTION
const whosOnline = (friends) => {
    const result = {
        online: [],
        offline: [],
        away: []
    };

    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.status === 'online') {
            if (friend.lastActivity <= 10) {
                result.online.push(friend.username);
            } else {
                result.away.push(friend.username);
            }
        } else if (friend.status === 'offline') {
            result.offline.push(friend.username);
        }
    }
    const finalResult = {};
    if (result.online.length > 0) finalResult.online = result.online;
    if (result.offline.length > 0) finalResult.offline = result.offline;
    if (result.away.length > 0) finalResult.away = result.away;

    return finalResult;
}


// ✅ Checking
const friends1 = [
    { username: 'David', status: 'online', lastActivity: 10 },
    { username: 'Lucy', status: 'offline', lastActivity: 22 },
    { username: 'Bob', status: 'online', lastActivity: 104 }
];

const friends2 = [
    { username: 'Lucy', status: 'offline', lastActivity: 22 },
    { username: 'Bob', status: 'online', lastActivity: 104 }
];

const friends3 = [];

console.log(whosOnline(friends1));
console.log(whosOnline(friends2));
console.log(whosOnline(friends3));