import {describe, it, expect} from 'vitest';
import {getState} from './Promise-State';


const withNoResult = (promise: Promise<string>): Promise<any> => {
  const noResult = new Promise(resolve => setTimeout(resolve, 50, "NO_RESULT"));
  return Promise.race([promise, noResult]);
}

describe('Promise State', () => {
  it('getState should return \'fulfilled\' for a resolved promise', async () => {
    const p = Promise.resolve();
    const state = await withNoResult(getState(p));
    expect(state).toBe('fulfilled');
  })

  it('getState should return \'rejected\' for a resolved promise', async () => {
    const p = Promise.reject();
    const state = await withNoResult(getState(p));
    expect(state).toBe('rejected');
  })

  it('getState should return \'pending\' for a resolved promise', async () => {
    const p = new Promise(() => {});
    const state = await withNoResult(getState(p));
    expect(state).toBe('pending');
  })
})