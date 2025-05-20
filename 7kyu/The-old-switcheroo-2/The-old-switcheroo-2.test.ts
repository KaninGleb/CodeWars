import {test, expect} from 'vitest';
import {encode} from './The-old-switcheroo-2';


test('The old switcheroo 2', () => {
  expect(encode('abc')).toBe('123');
  expect(encode('ABCD')).toBe('1234');
  expect(encode('ZzzzZ')).toBe('2626262626');
  expect(encode('abc-#@5')).toBe('123-#@5');
  expect(
    encode('this is a long string!! Please [encode] @C0RrEctly'))
    .toBe('208919 919 1 1215147 1920189147!! 161251195 [51431545] @30181853201225'
  );
})