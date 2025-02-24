// ❓DESCRIPTION
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
//
// If you want to know more: http://en.wikipedia.org/wiki/DNA
//
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
//
// Example: (input --> output):
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


// ⚙️ TESTS
// assert.strictEqual(dnaStrand("AAAA"),"TTTT","String AAAA is")
// assert.strictEqual(dnaStrand("ATTGC"),"TAACG","String ATTGC is")
// assert.strictEqual(dnaStrand("GTAT"),"CATA","String GTAT is")


// ✅ SOLUTION
export class Kata {
    static dnaStrand(dna: string) {
        const strand = dna.split('').map(dnaBase => {
            if (dnaBase === 'A') return 'T';
            if (dnaBase === 'T') return 'A';
            if (dnaBase === 'C') return 'G';
            if (dnaBase === 'G') return 'C';
        }).join('');
        return strand;
    }
}