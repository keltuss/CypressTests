Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});



describe('Register Bookstore', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.contains('div', 'Book Store Application').click()
        cy.contains('li.btn', 'Login').click()
    })

    it('Login with right email and pass', () => {

        cy.get('#userName').click().type('VJohnson')
        cy.get('#password').click().type('VicPassWord2@')
        cy.get('#login').click()

        cy.wait('@loginRequest') // Ждем завершения запроса

        cy.url().should('eq', 'https://demoqa.com/profile')
    });

    it('Login with right username and pass', () => {


        cy.get('#userName').click().type('VJohnson')
        cy.get('#password').click().type('VicPassWord2@')
        cy.get('#login').click()

        cy.url().should('eq', 'https://demoqa.com/profile')
    });

    it('Login with wrong username', () => {

        cy.get('#userName').click().type('Johnson')
        cy.get('#password').click().type('VicPassWord2@')
        cy.get('#login').click()

        cy.get('#name').should('have.text', 'Invalid username or password!')
    });

        it('Login with wrong password', () => {

        cy.get('#userName').click().type('VJohnson')
        cy.get('#password').click().type('VicPassord2@')
        cy.get('#login').click()

        cy.get('#name').should('have.text', 'Invalid username or password!')
    });

})