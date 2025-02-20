import {expect, test} from 'vitest';
import {isSquare} from './You-are-a-square!';

test('You\'re a square!', () => {
    expect(isSquare(-1)).toBe(false);
    expect(isSquare( 0)).to.be.true;
    expect(isSquare( 3)).to.be.false;
    expect(isSquare( 4)).to.be.true;
    expect(isSquare(25)).to.be.true;
    expect(isSquare(26)).to.be.false;
})