import { getHasStarted } from './getHasStarted';

describe('get hasStarted', () => {
  const state = {
    hasStarted: false
  };

  it('gets hasStarted', () => {
    expect(getHasStarted(state)).toBe(false);
  });
});
