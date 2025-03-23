Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});



describe('Register Bookstore', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.contains('div', 'Book Store Application').click()
        cy.contains('li.btn', 'Profile').click()
        cy.contains('a', 'login').click()
        cy.get('#userName').click().type('VJohnson')
        cy.get('#password').click().type('VicPassWord2@')
        cy.get('#login').click()
    })

    it('Delete all books with empty card', () => {
        cy.contains('button', 'Delete All Books').click()
        cy.get('#closeSmallModal-ok').should('be.visible')
            .click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal("No books available in your's collection!");
        })
    });


    it('Go to store from profile', () => {
       cy.get('#gotoStore').click()
        cy.url().should('eq', 'https://demoqa.com/books')
    });

    it('Log Out', () => {
        cy.get('#submit')
            .eq(0)
            .click()
        cy.url().should('eq', 'https://demoqa.com/login')
    });



})