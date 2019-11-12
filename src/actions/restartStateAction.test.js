import { restartStateAction, RESTART_STATE } from './restartStateAction';

describe('restart state action', () => {
  it('generates the expected action', () => {
    const result = restartStateAction();
    expect(result).toEqual({ type: RESTART_STATE });
  });
});
