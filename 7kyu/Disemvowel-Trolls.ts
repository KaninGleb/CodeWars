// ❓DESCRIPTION
// Trolls are attacking your comment section!
//
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//
// Note: for this kata y isn't considered a vowel.


// ⚙️ TESTS
// assert.strictEqual(solution.Kata.disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");


// ✅ SOLUTION
export class Kata {
    // OPTION 1
    static disemvowel(str: string): string {
        return str.replace(/[aeiouAEIOU]/g, '');
    }

    // OPTION 2
    static disemvowel2(str: string): string {
        return str.replace(/[aeiou]/gi, '');
    }

    // OPTION 3
    static disemvowel3(str: string): string {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        return str
            .split('')
            .map(l => vowels.includes(l.toLowerCase()) ? '' : l)
            .join('');
    }
}


// ✅ Checking
console.log(Kata.disemvowel("This website is for losers LOL!"), " --- Ths wbst s fr lsrs LL!");
console.log(Kata.disemvowel2("This website is for losers LOL!"), " --- Ths wbst s fr lsrs LL!");
console.log(Kata.disemvowel3("This website is for losers LOL!"), " --- Ths wbst s fr lsrs LL!");