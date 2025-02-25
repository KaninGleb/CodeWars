import {assert, test} from 'vitest';
import {findOutlier, findOutlier2} from './Find-The-Parity-Outlier';

test('Find The Parity Outlier', () => {
    assert.equal(findOutlier([0, 1, 2]), 1);
    assert.equal(findOutlier([1, 2, 3]), 2);
    assert.equal(findOutlier([2, 6, 8, 10, 3]), 3);
    assert.equal(findOutlier([0, 0, 3, 0, 0]), 3);
    assert.equal(findOutlier([1, 1, 0, 1, 1]), 0);
})

test('Find The Parity Outlier 2', () => {
    assert.equal(findOutlier2([0, 1, 2]), 1);
    assert.equal(findOutlier2([1, 2, 3]), 2);
    assert.equal(findOutlier2([2, 6, 8, 10, 3]), 3);
    assert.equal(findOutlier2([0, 0, 3, 0, 0]), 3);
    assert.equal(findOutlier2([1, 1, 0, 1, 1]), 0);
})