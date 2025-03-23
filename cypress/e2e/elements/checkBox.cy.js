Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Checkbox testing', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.get('svg[viewBox="0 0 448 512"]').click()

    })

    it('Expand and collapse buttons working', () => {
        cy.get('#item-1').click()
        cy.get('button[title="Expand all"]').click()
        cy.get('button[title="Collapse all"]').click()
    })

    it('Checkbox working to pick and unpick', () => {
        cy.get('#item-1').click()
        cy.get('span[class="rct-checkbox"]').first().click()
        cy.get('span[class="rct-checkbox"]').first().find('svg')
            .should('have.class', 'rct-icon-check')

        cy.get('span[class="rct-checkbox"]').first().click()
        cy.get('span[class="rct-checkbox"]').first().find('svg')
            .should('have.class', 'rct-icon-uncheck')
    })


    it('Toggle buttons open close', () => {
        cy.get('#item-1').click()
        cy.get('svg[class="rct-icon rct-icon-expand-close"]').first().click()
        cy.get('svg[class="rct-icon rct-icon-expand-open"]').first() // Checking if toggle is opened
        cy.get('svg[class="rct-icon rct-icon-expand-close"]').first().click()
        cy.get('svg[class="rct-icon rct-icon-expand-open"]').eq(1) // Checking if "Desktop" toggle is opened
    })

})