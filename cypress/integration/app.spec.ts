describe('global styles', () => {
  it('has some basic styling', () => {
    cy.visit('/');
    expect(cy.get('#root')).to.exist;
  });
});
