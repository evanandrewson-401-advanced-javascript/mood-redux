import { getFace } from './getFace'

describe('get face', () => {
  const state = {
    game: {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    }
  };
  it('derives a face from state', () => {
    const face = getFace(state);
    expect(face).toBe('😠');
  });
});
