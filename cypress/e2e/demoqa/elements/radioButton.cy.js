Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Radio buttons testing', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.get('svg[viewBox="0 0 448 512"]').click()

    })

    it('Yes, Impressive and no', () => {
        cy.get('#item-2').click()
        cy.get('label[for="yesRadio"]').click()
        cy.get('span[class="text-success"]').invoke('text').should('equal', 'Yes')

        cy.get('label[for="impressiveRadio"]').click()
        cy.get('span[class="text-success"]').invoke('text').should('equal', 'Impressive')

        cy.get('label[for="noRadio"]').should('have.css', 'cursor', 'not-allowed')
    })

})