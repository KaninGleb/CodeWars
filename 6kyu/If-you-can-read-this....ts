// ❓DESCRIPTION
// Task:
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).
//
// Input:
// If, you can read?

// Output:
// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:
// There is a preloaded dictionary that you can use, named NATO. It uses uppercase keys, e.g. NATO['A'] is "Alfa". See comments in the initial code to see how to access it in your language.
// The set of used punctuation is ,.!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace


// ⚙️ TESTS
// doTest('If you can read', 'India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta');
// doTest('Did not see that coming', 'Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf');
// doTest('go for it!', 'Golf Oscar Foxtrot Oscar Romeo India Tango !');


// ✅ SOLUTION
const NATO: {[key: string]: string} = {
    'A': 'Alfa', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', 'E': 'Echo',
    'F': 'Foxtrot', 'G': 'Golf', 'H': 'Hotel', 'I': 'India', 'J': 'Juliett',
    'K': 'Kilo', 'L': 'Lima', 'M': 'Mike', 'N': 'November', 'O': 'Oscar',
    'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo', 'S': 'Sierra', 'T': 'Tango',
    'U': 'Uniform', 'V': 'Victor', 'W': 'Whiskey', 'X': 'Xray', 'Y': 'Yankee',
    'Z': 'Zulu'
}

export function toNato(words: string) {
    const result = [];
    const wordsA = words.split(' ');

    for (let i = 0; i < wordsA.length; i++) {
        const word = wordsA[i];
        for (let j = 0; j < word.length; j++) {
            const char = word[j].toUpperCase();
            if (NATO[char]) {
                result.push(NATO[char]);
            } else {
                result.push(char);
            }
        }

        if (i < wordsA.length - 1) {
            result.push(' ');
        }
    }

    return result.join(' ').replace(/ +/g, ' ').trim();
}


// ✅ Checking
console.log(toNato('India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta'));
console.log(toNato('Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf'));
console.log(toNato('Golf Oscar Foxtrot Oscar Romeo India Tango !'));