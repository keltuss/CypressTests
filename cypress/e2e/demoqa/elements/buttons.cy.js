Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Buttons', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.get('svg[viewBox="0 0 448 512"]').click()
        cy.get('#item-4').click()

    })

    it('Double Click', () => {

        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('exist')
    })

    it('Right Click', () => {

        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('exist')
    })

    it('Click', () => {

        cy.contains('button', /^Click Me$/).click()
        cy.get('#dynamicClickMessage').should('exist')
    })

})