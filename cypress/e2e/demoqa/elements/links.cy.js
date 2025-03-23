Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Links', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.get('svg[viewBox="0 0 448 512"]').click()
        cy.get('#item-5').click()

    })

    it('Simple Link', () => {

        cy.get('#simpleLink')
            .should('have.attr', 'href', 'https://demoqa.com')
            .and('have.attr', 'target', '_blank')
            .click();
    })

    it('Dynamic Link', () => {
        cy.get('#dynamicLink').invoke('attr', 'href').then((href) => {
            cy.get('#dynamicLink').invoke('removeAttr', 'target');

            cy.get('#dynamicLink').click();

            cy.wait(1000);

            cy.url().then((currentUrl) => {
                const normalizedCurrentUrl = currentUrl.endsWith('/') ? currentUrl.slice(0, -1) : currentUrl;
                const normalizedHref = href.endsWith('/') ? href.slice(0, -1) : href;

                expect(normalizedCurrentUrl).to.equal(normalizedHref);
            });

        })
    })

    it('Created Check', () => {

        cy.get('#created').click()
        cy.get('#linkResponse').should('contain.text', '201')
            .and('contain.text', 'Created')
    })

    it('No Content Check', () => {

        cy.get('#no-content').click()
        cy.get('#linkResponse').should('contain.text', '204')
            .and('contain.text', 'No Content')
    })

    it('Moved Permanently Check', () => {

        cy.get('#moved').click()
        cy.get('#linkResponse').should('contain.text', '301')
            .and('contain.text', 'Moved Permanently')
    })

    it('Bad Request Check', () => {

        cy.get('#bad-request').click()
        cy.get('#linkResponse').should('contain.text', '400')
            .and('contain.text', 'Bad Request')
    })

    it('Unauthorized Check', () => {

        cy.get('#unauthorized').click()
        cy.get('#linkResponse').should('contain.text', '401')
            .and('contain.text', 'Unauthorized')
    })

    it('Forbidden Check', () => {

        cy.get('#forbidden').click()
        cy.get('#linkResponse').should('contain.text', '403')
            .and('contain.text', 'Forbidden')
    })

        it('Not Found Check', () => {

        cy.get('#invalid-url').click()
        cy.get('#linkResponse').should('contain.text', '404')
            .and('contain.text', 'Not Found')
    })

})