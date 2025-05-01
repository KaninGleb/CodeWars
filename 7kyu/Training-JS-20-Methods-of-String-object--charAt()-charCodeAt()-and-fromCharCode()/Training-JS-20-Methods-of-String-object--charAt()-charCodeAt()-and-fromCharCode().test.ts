import {test, expect} from 'vitest';
import {topSecret} from './Training-JS-20-Methods-of-String-object--charAt()-charCodeAt()-and-fromCharCode()';


test('Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()', () => {
  expect(topSecret('Pb qdph lv Mrkq')).toBe('My name is John');
  expect(topSecret('wklv lv dq hadpsoh')).toBe('this is an example');
  expect(topSecret('Khoor Zruog!')).toBe('Hello World!');
  expect(topSecret('Wrs vhfuhw ilohv: Qr. 2208 Vxshu djhqw CFZgmM, rq d gdun qljkw, vwroh wkh Eduelh groo iurp Qdwlrqdo Pxvhxp, fdxvlqj $100 ploolrq lq gdpdjh.'))
    .toBe('Top secret files: No. 2208 Super agent ZCWdjJ, on a dark night, stole the Barbie doll from National Museum, causing $100 million in damage.')
})