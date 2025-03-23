Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Tabs', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.contains('div', 'Widgets').click()
        cy.contains('li.btn', 'Tabs').click()
    })

    it('Should display "What" tab content by default', () => {
        cy.get('#demo-tab-what').should('have.class', 'active')
        cy.get('#demo-tabpane-what').should('be.visible')
        cy.get('#demo-tabpane-origin').should('not.be.visible')
        cy.get('#demo-tabpane-use').should('not.be.visible')
    })

    it('Should switch to "Origin" tab and display correct content', () => {
        cy.get('#demo-tab-origin').click();
        cy.get('#demo-tab-origin').should('have.class', 'active')
        cy.get('#demo-tabpane-origin').should('be.visible')
        cy.get('#demo-tabpane-what').should('not.be.visible')
        cy.get('#demo-tabpane-use').should('not.be.visible')
    })

    it('Should switch to "Use" tab and display correct content', () => {
        cy.get('#demo-tab-use').click();
        cy.get('#demo-tab-use').should('have.class', 'active')
        cy.get('#demo-tabpane-use').should('be.visible')
        cy.get('#demo-tabpane-what').should('not.be.visible')
        cy.get('#demo-tabpane-origin').should('not.be.visible')
    })

    it('should not show content for "More" tab as it is broken', () => {
        cy.get('#demo-tab-more').should('not.have.attr', 'disabled')
        cy.get('#demo-tab-more').should('not.have.class', 'inactive')
    })





})