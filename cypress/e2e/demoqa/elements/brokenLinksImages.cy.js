Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Links', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.get('svg[viewBox="0 0 448 512"]').click()
        cy.get('#item-6').click()

    })

    it('Valid Image Link',() =>{

        cy.get('img[src="/images/Toolsqa.jpg"]').should('be.visible')
            .and(($img) => {
                expect($img[0].naturalWidth).to.be.greaterThan(0);
                expect($img[0].naturalHeight).to.be.greaterThan(0);
            });

        cy.request('https://demoqa.com/images/Toolsqa.jpg')
            .its('status')
            .should('eq', 200);
    });

    it('Broken Image Link',() =>{

        cy.get('img[src="/images/Toolsqa_1.jpg"]')
            .should('be.visible')
            .and(($img) => {
                expect($img[0].naturalWidth).to.equal(0);
                expect($img[0].naturalHeight).to.equal(0);
            });

        cy.request({
            url: 'https://demoqa.com/images/Toolsqa_1.jpg',
            failOnStatusCode: false,
        })
            .its('status')
            .should('eq', 200);
    });

    it('Valid Link',() =>{

        cy.contains('a', 'Valid Link')

        cy.request('https://demoqa.com')
            .its('status')
            .should('eq', 200);
    });

    it('Broken Link',() =>{

        cy.contains('a', 'Broken Link')

        cy.request({
            url: 'https://the-internet.herokuapp.com/status_codes/500',
            failOnStatusCode: false,

        })
            .its('status')
            .should('eq', 500)
    });

})