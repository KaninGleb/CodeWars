import {expect, test} from 'vitest';
import {oneTwoThree} from './Begin-your-day-with-a-challenge,-but-an-easy-one';


test('Begin your day with a challenge, but an easy one.', () => {
    const tests: [number, string[]][] = [
            [0,  ['0', '0']],
            [1,  ['1', '1']],
            [2,  ['2', '11']],
            [3,  ['3', '111']],
            [19, ['991', '1111111111111111111']],
            [151, ['99999999999999997', '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111']]
        ];


    for (const [input, expected] of tests) {
        expect(oneTwoThree(input)).toEqual(expected);
    }
})