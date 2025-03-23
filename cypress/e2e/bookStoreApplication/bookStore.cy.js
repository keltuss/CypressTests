Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});



describe('Register Bookstore', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.contains('div', 'Book Store Application').click()
        cy.contains('li.btn', 'Book Store').click()
    })

    it('Search No rows found', () => {
        cy.get('#searchBox').click().type('qwerty12345')
        cy.contains('div', 'No rows found').should('be.visible')
    });

        it('Search find book by title', () => {
        cy.get('#searchBox').click().type('Git Pocket Guide')
        cy.contains('a', 'Git Pocket Guide').should('be.visible')
    });

        it('Search find book by author', () => {
        cy.get('#searchBox').click().type('Richard E. Silverman')
        cy.contains('a', 'Git Pocket Guide').should('be.visible')
    });

        it('Search find book by publisher', () => {
        cy.get('#searchBox').click().type('Reilly Media')
        cy.contains('a', 'Git Pocket Guide').should('be.visible')
        cy.contains('a', 'Learning JavaScript Design Patterns').should('be.visible')
        cy.contains('a', 'Designing Evolvable Web APIs with ASP.NET').should('be.visible')
        cy.contains('a', 'Speaking JavaScript').should('be.visible')
        cy.contains('a', "You Don't Know JS").should('be.visible')
        cy.contains('a', 'Programming JavaScript Applications').should('be.visible')
    });

    it('Sorting books by Author', () => {
        cy.get('div[class="rt-th rt-resizable-header -cursor-pointer"]')
            .eq(2)
            .click();

        cy.get('div[class="rt-td"]')
            .eq(2)
            .should('have.text', 'Addy Osmani')

        });

    it('Click book', () => {
        cy.contains('a', 'Git Pocket Guide').click()
        cy.url().should('eq', 'https://demoqa.com/books?book=9781449325862')
    });


})