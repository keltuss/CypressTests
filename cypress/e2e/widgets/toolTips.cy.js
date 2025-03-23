Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Tool Tips', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.contains('div', 'Widgets').click()
        cy.contains('li.btn', 'Tool Tips').click()
    })

    it('Should show tooltip on hover for button', () => {
        cy.get('#toolTipButton').trigger('mouseover')
        cy.get('.tooltip-inner')
            .should('be.visible')
            .and('contain', 'You hovered over the Button');
    })

    it('should show tooltip on hover for text field', () => {
        cy.get('#toolTipTextField').trigger('mouseover')

        cy.get('.tooltip-inner')
            .should('be.visible')
            .and('contain', 'You hovered over the text field')
    });

    it('should show tooltip on hover for "Contrary" link', () => {
        cy.contains('a', 'Contrary')
            .trigger('mouseover')

        cy.get('.tooltip-inner')
            .should('be.visible')
            .and('contain', 'You hovered over the Contrary')
    });

    it('should show tooltip on hover for "1.10.32" link', () => {
        cy.contains('a', '1.10.32')
            .trigger('mouseover')

        cy.get('.tooltip-inner')
            .should('be.visible')
            .and('contain', 'You hovered over the 1.10.32')
    });
})