import details from '../details';

describe('details', () => {
  it('open', () => {
    const id = 1;

    details.open(id);

    expect(details.isOpen).toEqual(true);
    expect(details.id).toEqual(id);
  });

  it('close', () => {
    details.close();

    expect(details.isOpen).toEqual(false);
    expect(details.id).toBeNull();
  });
});
