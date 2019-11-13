import { decrementCounterAction, DECREMENT_COUNTER } from './decrementCounterAction';

describe('decrement counter action', () => {
  it('generates the expected action', () => {
    const result = decrementCounterAction();
    expect(result).toEqual({ type: DECREMENT_COUNTER });
  });
});
