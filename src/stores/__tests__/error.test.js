import error from '../error';

describe('error', () => {
  it('setError', () => {
    const value = {
      message: 'message',
    };

    error.setError(value);

    expect(error.error).toEqual(value);
  });

  it('deleteError', () => {
    error.deleteError();

    expect(error.error).toBeNull();
  });
});
