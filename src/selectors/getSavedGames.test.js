import { getSavedGames } from "./getSavedGames";

describe('get saved games', () => {
  const state = {
    history: {
      savedGames: [{
        face: '😠',
        coffees: 0,
        snacks: 0,
        naps: 0,
        studies: 0,
      }]
    }
  };

  it('returns an array of actions with count', () => {
    const result = getSavedGames(state);
    expect(result).toEqual([{
      face: '😠',
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0,
    }]);
  });
});
