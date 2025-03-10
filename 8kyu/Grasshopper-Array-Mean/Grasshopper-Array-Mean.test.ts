import {expect, test} from 'vitest';
import {findAverage} from './Grasshopper-Array-Mean';

test('Grasshopper - Array Mean', () => {
    expect(findAverage([1])).toBe(1);
    expect(findAverage([1, 3, 5, 7])).toBe(4);
})