import {expect, test} from 'vitest';
import {unusualSort} from './UN-usual-Sort';


test('UN-usual Sort', () => {
    expect(unusualSort('0981726354'.split(''))).toEqual('0123456789'.split(''))
    expect(unusualSort('321cba'.split(''))).toEqual('abc123'.split(''))
    expect(unusualSort('x1y2z3'.split(''))).toEqual('xyz123'.split(''))
    expect(unusualSort('cba950XYZ'.split(''))).toEqual('XYZabc059'.split(''))
    expect(unusualSort([3, '3', '2', 2, '2', '1', 1, 'a', 'b', 'c'])).toEqual(['a', 'b', 'c', 1, '1', 2, '2', '2', 3, '3']);
})