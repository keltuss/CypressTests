Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Progress bar', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.contains('div', 'Widgets').click()
        cy.contains('li.btn', 'Progress Bar').click()
    })


    it('Should start the progress bar and reach 100%', () => {
        cy.get('#startStopButton').click()

        cy.get('.progress-bar')
            .should('have.attr', 'aria-valuenow')
            .then((value) => {
                const progressValue = parseInt(value, 10);
                expect(progressValue).to.be.lessThan(100);
            });

        cy.wait(10000)
        cy.get('.progress-bar').should('have.attr', 'aria-valuenow', '100');

        cy.get('.progress-bar')
            .should('contain', '100%')
    })

    it('should stop the progress bar when clicking Stop', () => {

        cy.get('#startStopButton').click();

        cy.get('.progress-bar')
            .should(($el) => {
                const val = parseInt($el.attr('aria-valuenow'), 10)
                expect(val).to.be.greaterThan(20)
            });

        cy.get('#startStopButton').click();



        cy.get('.progress-bar')
            .invoke('attr', 'aria-valuenow')
            .then((stoppedVal) => {
                const stoppedPercent = parseInt(stoppedVal, 10)
                expect(stoppedPercent).to.be.greaterThan(20)
                expect(stoppedPercent).to.be.lessThan(100)
            })
    })

    it('should not exceed 100% and should stay at 100% once reached', () => {

        cy.get('#startStopButton').click();

        cy.wait(10000)

        cy.get('.progress-bar')
            .should('have.attr', 'aria-valuenow', '100');

        cy.get('.progress-bar')
            .should('contain', '100%');
    });

    it('Reset Button shows after reaching 100%', () => {

        cy.get('#startStopButton').click();
        cy.wait(10000)
        cy.get('#resetButton').should('be.visible').and('be.enabled')
    });

})
