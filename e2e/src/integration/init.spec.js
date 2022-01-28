describe('Init app', () => {
  it('is working', () => {
    expect(true).to.equal(true);
  });

  it('opens the app', () => {
    cy.visit('/');
  });
});
