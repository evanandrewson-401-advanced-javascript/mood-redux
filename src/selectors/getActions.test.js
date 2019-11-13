import { getActions } from './getActions';

describe('get actions', () => {
  const state = {
    game: {
      actions: [
        { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
        { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks' },
        { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps' },
        { name: 'STUDY', text: 'Study', stateName: 'studies' },
      ],
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0,
    }
  };

  it('returns an array of actions with count', () => {
    const result = getActions(state);
    expect(result).toEqual([
      { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees', count: 0 },
      { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks', count: 0 },
      { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps', count: 0 },
      { name: 'STUDY', text: 'Study', stateName: 'studies', count: 0 },
    ]);
  });
});
