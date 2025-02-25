import {assert, test} from 'vitest';
import {sumDigits} from './Summing-a-numbers-digits';

test('', () => {
    assert.equal(sumDigits(10), 1);
    assert.equal(sumDigits(99), 18);
    assert.equal(sumDigits(-32), 5);
})