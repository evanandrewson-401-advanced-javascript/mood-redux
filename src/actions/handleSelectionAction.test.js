import { handleSelectionAction } from './handleSelectionAction';

describe('handle selection action', () => {
  it('generates the expected action', () => {
    const result = handleSelectionAction('test');
    expect(result).toEqual({ type: 'test' });
  });
});
