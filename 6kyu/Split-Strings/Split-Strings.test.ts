import {test, expect} from 'vitest';
import {solution} from './Split-Strings';


test('Split Strings', () => {
  expect(solution('abcdef'))   .toEqual(['ab', 'cd', 'ef']);
  expect(solution('abcdefg'))  .toEqual(['ab', 'cd', 'ef', 'g_']);
  expect(solution(''))         .toEqual([]);
})