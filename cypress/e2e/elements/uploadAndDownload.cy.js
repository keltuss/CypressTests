Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Upload And Download Testing', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.get('svg[viewBox="0 0 448 512"]').click()
        cy.get('#item-7').click()
    })

    it('Download Case', () => {
        cy.get('#downloadButton').click()


        cy.get('#downloadButton')
            .invoke('attr', 'href')
            .then((href) => {
                cy.request(href)
                    .its('status')
                    .should('eq', 200);
            });

    })


    it('Upload Case', () => {

        cy.get('#uploadFile').should('be.visible')

        const fileName = 'test-file.txt';
        cy.get('#uploadFile').attachFile(fileName);
        cy.get('#uploadedFilePath').should('be.visible').and('contain', fileName)



    })





})