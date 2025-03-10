import {expect, test} from 'vitest';
import {minMax} from './The-highest-profit-wins!';


test('The highest profit wins!', () => {
    expect(minMax([1, 2, 3, 4, 5])).toEqual([1, 5]);
    expect(minMax([2334454, 5])).toEqual([5, 2334454]);
    expect(minMax([5])).toEqual([5, 5]);
})