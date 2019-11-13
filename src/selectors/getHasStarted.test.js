import { getHasStarted } from './getHasStarted';

describe('get hasStarted', () => {
  const state = {
    game: {
      hasStarted: false
    }
  };

  it('gets hasStarted', () => {
    expect(getHasStarted(state)).toBe(false);
  });
});
