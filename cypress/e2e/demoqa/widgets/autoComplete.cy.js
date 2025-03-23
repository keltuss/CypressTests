Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Auto Complete', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.contains('div', 'Widgets').click()
        cy.contains('li.btn', 'Auto Complete').click()
    })


    it('Multiple auto complete ', () => {

        cy.get('#autoCompleteMultipleInput').click()
        cy.get('#autoCompleteMultipleInput').type('Black{enter}').type('White{enter}').type('Red{enter}')

        cy.get('.auto-complete__multi-value__label')
            .should('have.length', 3)
            .and('contain', 'Black')
            .and('contain', 'White')
            .and('contain', 'Red')
    })

    it('Single auto complete ', () => {
        cy.get('#autoCompleteSingleInput').click()
        cy.get('#autoCompleteSingleInput').type('Yellow{enter}')
        cy.get('.auto-complete__single-value').should('contain', 'Yellow')

    })


})