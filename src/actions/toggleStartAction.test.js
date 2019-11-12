import { toggleStartAction, TOGGLE_START } from './toggleStartAction';

describe('toggle start action', () => {
  it('generates the expected action', () => {
    const result = toggleStartAction();
    expect(result).toEqual({ type: TOGGLE_START });
  });
});
