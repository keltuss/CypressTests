Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Nested Frames', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.get('svg[viewBox="0 0 14 16"]').click()
        cy.contains('li.btn', 'Nested Frames').click()
    })

    it('Checks content inside nested iframes', () => {
        cy.get('iframe#frame1')
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
            .within(() => {
                cy.contains('Parent frame').should('be.visible');

                cy.get('iframe')
                    .its('0.contentDocument.body')
                    .should('not.be.empty')
                    .then(cy.wrap)
                    .within(() => {
                        cy.contains('Child Iframe').should('be.visible');
                    });
            });
    })
})