Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Modal Dialogs', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.get('svg[viewBox="0 0 14 16"]').click()
        cy.contains('li.btn', 'Modal Dialogs').click()
    })

    it('Handles simple alert', () => {
        cy.get('#showSmallModal').click()
        cy.contains('div', 'This is a small modal. It has very less content')
            .should('be.visible')
        cy.get('#closeSmallModal').click()
    })

    it('Handles simple alert', () => {
        cy.get('#showLargeModal').click()
        cy.contains('p', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')
            .should('be.visible')
        cy.get('#closeLargeModal').click()
    })


})