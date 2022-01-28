describe('Country', () => {
  beforeEach(() => {
    if (Cypress.env('env') !== 'ci') {
      cy.intercept('**/country/city', { fixture: 'country-city.json' })
        .as('loadCounties');
    }
  });

  it('opens the app', () => {
    cy.visit('/');
  });
  it('should display select a county', () => {
    cy.get('.capital-container').get('.select-country').contains('Select a country');
  });
  it('should select first country and display it', () => {
    cy.get('a.btn').then(countries => {
      const randomNumber = Math.floor(Math.random() * countries.length);
      countries[randomNumber].click();
      cy.get('.capital-container').not('.select-country');
      cy.get('.country-name').contains(countries[randomNumber].innerText);
    });
  });
});
