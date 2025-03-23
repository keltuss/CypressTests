Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Dynamic properties', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.get('svg[viewBox="0 0 448 512"]').click()
        cy.get('#item-8').click()
    })

    it('Random ID text', () => {
        cy.contains('p', 'This text has random Id').should('be.visible')
    })

    it('First button enables after 5 seconds', () => {
        cy.get('#enableAfter').should('be.disabled')
        cy.get('#enableAfter', {timeout: 6000}).should('not.be.disabled')
            .and('be.enabled')
            .and('be.visible')
    })

    it('Second button text color changes', () => {
        cy.get('#colorChange')
            .should('have.css', 'color', 'rgb(255, 255, 255)')
        cy.get('#colorChange', {timeout: 6000})
            .should('have.css', 'color', 'rgb(220, 53, 69)')
            .and('not.have.css', 'color', 'rgb(255, 255, 255)')
    })

    it('Third button visible after 5 seconds', () => {
        cy.get('#visibleAfter', {timeout: 6000}).should('be.enabled').and('be.visible')
    })







})