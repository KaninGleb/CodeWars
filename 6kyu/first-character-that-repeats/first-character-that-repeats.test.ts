import {expect, test} from 'vitest';
import {firstDup, firstDup2, firstDup3} from './first-character-that-repeats';


test('first character that repeats', () => {
  expect(firstDup('tweet')       ).toBe('t');
  expect(firstDup('Ode to Joy')  ).toBe(' ');
  expect(firstDup('ode to joy')  ).toBe('o');
  expect(firstDup('bar')         ).toBe(undefined);
  expect(firstDup('123123')      ).toBe('1');
  expect(firstDup('!@#$!@#$')    ).toBe('!');
})

test('first character that repeats - Option 2', () => {
  expect(firstDup2('tweet')       ).toBe('t');
  expect(firstDup2('Ode to Joy')  ).toBe(' ');
  expect(firstDup2('ode to joy')  ).toBe('o');
  expect(firstDup2('bar')         ).toBe(undefined);
  expect(firstDup2('123123')      ).toBe('1');
  expect(firstDup2('!@#$!@#$')    ).toBe('!');
})


test('first character that repeats - Option 3', () => {
  expect(firstDup3('tweet')       ).toBe('t');
  expect(firstDup3('Ode to Joy')  ).toBe(' ');
  expect(firstDup3('ode to joy')  ).toBe('o');
  expect(firstDup3('bar')         ).toBe(undefined);
  expect(firstDup3('123123')      ).toBe('1');
  expect(firstDup3('!@#$!@#$')    ).toBe('!');
})