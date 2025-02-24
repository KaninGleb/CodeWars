import {assert, test} from 'vitest';
import {countBits, countBits2, countBits3, countBits4} from './Bit-Counting';

test('Bit Counting', () => {
    assert.equal(countBits(0), 0);
    assert.equal(countBits(4), 1);
    assert.equal(countBits(7), 3);
    assert.equal(countBits(9), 2);
    assert.equal(countBits(10), 2);
})

test('Bit Counting - 2', () => {
    assert.equal(countBits2(0), 0);
    assert.equal(countBits2(4), 1);
    assert.equal(countBits2(7), 3);
    assert.equal(countBits2(9), 2);
    assert.equal(countBits2(10), 2);
})

test('Bit Counting - 3', () => {
    assert.equal(countBits3(0), 0);
    assert.equal(countBits3(4), 1);
    assert.equal(countBits3(7), 3);
    assert.equal(countBits3(9), 2);
    assert.equal(countBits3(10), 2);
})

test('Bit Counting - 4', () => {
    assert.equal(countBits4(0), 0);
    assert.equal(countBits4(4), 1);
    assert.equal(countBits4(7), 3);
    assert.equal(countBits4(9), 2);
    assert.equal(countBits4(10), 2);
})