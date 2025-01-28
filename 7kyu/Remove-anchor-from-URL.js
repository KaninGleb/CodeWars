// ❓DESCRIPTION
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//
// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"


// ⚙️ TESTS
// assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
// assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
// assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')


// ✅ SOLUTION
const removeUrlAnchor = url => {
    const track = url.indexOf('#');
    return track === -1 ? url : url.slice(0, track);
}


// ✅ Checking
console.log(removeUrlAnchor('www.codewars.com#about'));
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'));
console.log(removeUrlAnchor('www.codewars.com/katas/'));