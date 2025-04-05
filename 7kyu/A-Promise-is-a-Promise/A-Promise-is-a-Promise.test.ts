import {test, expect} from 'vitest';
import {promiseHelloWorld} from './A-Promise-is-a-Promise';


  test('A Promise is a Promise', async () => {
    const promise = await promiseHelloWorld();

    expect(promise).toBe('Hello World!');
  })