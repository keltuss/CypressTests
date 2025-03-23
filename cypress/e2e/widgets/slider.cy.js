Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Slider', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.contains('div', 'Widgets').click()
        cy.contains('li.btn', 'Slider').click()
    })

    it('Slider', () => {
        const valueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set

        cy.get('#sliderContainer input[type=range]')
            .should('have.value', '25')
            .then($slider => {
                valueSetter.call($slider[0], 84)
            })
                .trigger('change')
                cy.get('#sliderContainer input[type=range]').should('have.value', 84)}
            )
    })
