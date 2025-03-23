Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Selectable', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.contains('div', 'Interactions').click()
        cy.contains('li.btn', 'Selectable').click()
    })

    it('Selectable item check select and cancel', () => {
        cy.contains('li', 'Cras justo odio')
            .should('be.visible')
            .click()
        cy.get('li[class="mt-2 list-group-item active list-group-item-action"]')
            .should('be.visible')
            .click()
        cy.get('li[class="mt-2 list-group-item list-group-item-action"]')
            .eq(0)
            .should('be.visible')
    });

    it('Grid Selectable item check select and cancel', () => {
        cy.get('#demo-tab-grid').click()
        cy.contains('li', 'Five')
            .should('be.visible')
            .click()
            .should('have.class', 'active');

        cy.contains('li', 'Five')
            .should('be.visible')
            .click()
            .should('not.have.class', 'active');
    });

})