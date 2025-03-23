Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


describe('Elements testing', () => {

  beforeEach(() => {
    cy.visit('https://demoqa.com/');
    cy.get('svg[viewBox="0 0 448 512"]').click()

  })

  it('Text Box Success Case', () => {
    cy.get('#item-0').click()
    cy.get('#userName').click().type('Victor')
    cy.get('#userEmail').click().type('Johnson@gmail.com')
    cy.get('#currentAddress').click().type('Main St, 10')
    cy.get('#permanentAddress').click().type('Old St, 10')
    cy.get('button[id=submit]').click()
    cy.get('#output').should('be.visible')
  })

  it('Text Box Wrong Email Case', () => {
    cy.get('#item-0').click()
    cy.get('#userName').click().type('Victor')
    cy.get('#userEmail').click().type('Johnson')
    cy.get('#currentAddress').click().type('Main St, 10')
    cy.get('#permanentAddress').click().type('Old St, 10')
    cy.get('button[id=submit]').click()
    cy.get('#userEmail')
        .should('have.class', 'field-error')
  })

  it('Text Box Empty fields', () => {
    cy.get('#item-0').click()
    cy.get('button[id=submit]').click()
    cy.get('#output').should('not.be.visible')
  })

    it('Check info after registration', () => {
        cy.get('#item-1').click()
        cy.get('#userName').click().type('Victor')
        cy.get('#userEmail').click().type('Johnson@gmail.com')
        cy.get('#currentAddress').click().type('Main St, 10')
        cy.get('#permanentAddress').click().type('Old St, 10')
        cy.get('button[id=submit]').click()
        cy.get('#output').should('be.visible')
    })

})