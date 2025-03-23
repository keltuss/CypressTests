Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Browser Windows', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.get('svg[viewBox="0 0 14 16"]').click()
        cy.contains('span', 'Browser Windows').click()
    })

    it('Intercepts window.open for New Tab', () => {

        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });
        cy.get('#tabButton').click();
        cy.get('@windowOpen').should('be.calledWith', '/sample');

    })

    it('Intercepts window.open for New Window', () => {
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });

        cy.get('#windowButton').click();
        cy.get('@windowOpen').should('be.calledWith', '/sample');
    });

    it('Intercepts window.open for New Window Message', () => {
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url, target, features) => {
                cy.log('window.open called for message window');

                return { document: { write: cy.stub() } };
            }).as('windowOpen');
        });

        cy.get('#messageWindowButton').click();
        cy.get('@windowOpen').should('be.called');
    });


})