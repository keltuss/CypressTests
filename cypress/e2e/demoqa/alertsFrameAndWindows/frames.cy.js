Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Frames', () => {


    function getIframeBody(iframeSelector) {
        return cy
            .get(iframeSelector)
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap);
    }

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.get('svg[viewBox="0 0 14 16"]').click()
        cy.contains('li.btn', 'Frames').click()

    })

    it('Checks content inside Frame 1', () => {


        getIframeBody('#frame1').within(() => {
            cy.get('h1#sampleHeading').should('have.text', 'This is a sample page');
        });
    });

    it('Checks content inside Frame 2', () => {
        getIframeBody('#frame2').within(() => {
            cy.get('h1#sampleHeading').should('have.text', 'This is a sample page');
        });
    });

})
