import {expect, test} from 'vitest';
import {solution} from './Round-by-0,5-steps';


test('Round by 0.5 steps', () => {
  expect(solution(4.2)).toBe(4);
  expect(solution(4.4)).toBe(4.5);
  expect(solution(4.6)).toBe(4.5);
  expect(solution(4.8)).toBe(5);
  expect(solution(4.75)).toBe(5);
})