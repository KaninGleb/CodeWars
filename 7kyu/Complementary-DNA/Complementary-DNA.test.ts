import {assert, test} from 'vitest';
import {Kata} from './Complementary-DNA';

test('Complementary DNA', () => {
    assert.strictEqual(Kata.dnaStrand("AAAA"),"TTTT","String AAAA is");
    assert.strictEqual(Kata.dnaStrand("ATTGC"),"TAACG","String ATTGC is");
    assert.strictEqual(Kata.dnaStrand("GTAT"),"CATA","String GTAT is");
})