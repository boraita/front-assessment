describe('Country', () => {
  beforeEach(() => {
    cy.intercept('**/country/city', { fixture: 'country-city.json' })
      .as('loadCounties');
  });

  it('opens the app', () => {
    cy.visit('/');
  });
  it('should display select a county', () => {
    cy.get('.capital-container').get('.select-country').contains('Select a country');
  });
  it('should select first country and display it', () => {
    cy.get('a.btn').then(countries => countries[0].click());
    cy.get('.capital-container').not('.select-country');
    cy.get('.country-name').contains('Afghanistan');
    cy.get('.city-name').contains('Kabul');
  });
});
