import {expect, test} from 'vitest';
import {isPangram} from './Detect-Pangram';

test('Detect Pangram', () => {
    expect(isPangram("The quick brown fox jumps over the lazy dog.")).toBe(true);
    expect(isPangram("This is not a pangram.")).toBe(false);
})