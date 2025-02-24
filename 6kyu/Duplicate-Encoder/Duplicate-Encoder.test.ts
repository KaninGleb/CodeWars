import {assert, test} from 'vitest';
import {duplicateEncode} from './Duplicate-Encoder';

test('Duplicate Encoder', () => {
    assert.strictEqual(duplicateEncode("din"),"(((");
    assert.strictEqual(duplicateEncode("recede"),"()()()");
    assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
    assert.strictEqual(duplicateEncode("(( @"),"))((");
})