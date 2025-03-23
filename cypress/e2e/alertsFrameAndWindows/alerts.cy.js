Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Alerts', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.get('svg[viewBox="0 0 14 16"]').click()
        cy.contains('li.btn', 'Alerts').click()
    })

    it('Handles simple alert', () => {
        cy.get('#alertButton').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You clicked a button');
        })
    })

    it('Handles alert with delay', () => {
        cy.get('#timerAlertButton').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('This alert appeared after 5 seconds');
        })
    })

    it('Handles confirm box - Accept', () => {
        cy.get('#confirmButton').click();
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Do you confirm action?');
            return true;
        });
        cy.get('#confirmResult').should('contain', 'You selected Ok');
    })

    it('Handles confirm box - Cancel', () => {
        cy.get('#confirmButton').click();
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Do you confirm action?');
            return false;
        })
        cy.get('#confirmResult').should('contain', 'You selected Cancel');
    })

    it('Handles prompt box', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Victor');
        });
        cy.get('#promtButton').click();
        cy.get('#promptResult').should('contain', 'You entered Victor');
    });

})