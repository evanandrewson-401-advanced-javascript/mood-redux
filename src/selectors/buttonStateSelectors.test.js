import { getCoffees, getSnacks, getNaps, getStudies } from './buttonStateSelectors';

describe('button state selectors', () => {
  const state = {
    game: {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    }
  };

  it('gets coffees', () => {
    expect(getCoffees(state)).toBe(0);
  });
  it('gets snacks', () => {
    expect(getSnacks(state)).toBe(0);
  });
  it('gets naps', () => {
    expect(getNaps(state)).toBe(0);
  });
  it('gets studies', () => {
    expect(getStudies(state)).toBe(0);
  });
});
