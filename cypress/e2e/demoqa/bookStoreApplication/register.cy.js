Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Register Bookstore', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.contains('div', 'Book Store Application').click()
        cy.contains('li.btn', 'Login').click()
    })

    it('Register new account no reCaptcha', () => {

        cy.get('#newUser').should('be.visible').click()

        cy.get('#firstname').click().type('Victor')
        cy.get('#lastname').click().type('Johnson')
        cy.get('#userName').click().type('VJohnson')
        cy.get('#password').click().type('VicPassWord2@')
        cy.get('#register').click()

    });


})