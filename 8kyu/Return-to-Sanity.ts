// ❓DESCRIPTION
// This function should return an object, but it's not doing what's intended. What's wrong?


// ✅ SOLUTION
const results = {sanity: 'Hello'};

function mystery() {
    return results;
}


// ✅ Checking
console.log(mystery())