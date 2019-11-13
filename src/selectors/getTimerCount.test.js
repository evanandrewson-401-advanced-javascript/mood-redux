import { getTimerCount } from './getTimerCount';

describe('get timer count', () => {
  const state = {
    game: {
      timerCount: 30
    }
  };

  it('gets timer count', () => {
    expect(getTimerCount(state)).toBe(30);
  });
});
