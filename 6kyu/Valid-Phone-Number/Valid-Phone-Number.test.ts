import {test, expect} from 'vitest';
import {validPhoneNumber} from './Valid-Phone-Number';


test('Valid Phone Number', () => {
  expect(validPhoneNumber('(123) 456-7890')).toBe(true);
  expect(validPhoneNumber('(1111)555 2345')).toBe(false);
  expect(validPhoneNumber('(098) 123 4567')).toBe(false);
  expect(validPhoneNumber('(123)456-7890')).toBe(false);
})