import {expect, test} from 'vitest';
import {shortestArrang} from './Help-Mrs-Jefferson';


test('Help Mrs Jefferson', () => {
    // expect(shortestArrang(10)).toEqual([4, 3, 2, 1]);
    // expect(shortestArrang(14)).toEqual([5, 4, 3, 2]);
    expect(shortestArrang(16)).toEqual([-1]);
    // expect(shortestArrang(22)).toEqual([7, 6, 5, 4]);
    // expect(shortestArrang(65)).toEqual([33, 32]);
})
