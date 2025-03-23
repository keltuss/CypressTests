Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Sortable', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.contains('div', 'Interactions').click()
        cy.contains('li.btn', 'Sortable').click()
    })

    it('Should reorder items with mouse events', () => {

        cy.get('#demo-tabpane-list div.list-group-item')
            .eq(0)
            .trigger('mousedown', { which: 1 })

        cy.get('#demo-tabpane-list div.list-group-item')
            .eq(1)
            .trigger('mousemove', { clientY: 300 })
            .trigger('mouseup', { force: true })

        cy.get('#demo-tabpane-list div.list-group-item')
            .eq(1)
            .should('contain', 'One')
    });

    it('Should move Six to the position of Five', () => {

        cy.get('#demo-tabpane-list div.list-group-item')
            .eq(5)
            .trigger('mousedown', { which: 1 })

        cy.get('#demo-tabpane-list div.list-group-item')
            .eq(4)
            .trigger('mousemove', { clientY: -50 })
            .trigger('mouseup', { force: true })

        cy.get('#demo-tabpane-list div.list-group-item')
            .eq(4)
            .should('contain', 'Six')

        cy.get('#demo-tabpane-list div.list-group-item')
            .eq(5)
            .should('contain', 'Five')
    });

    it('Sortable Grid test: move Eight to Two', () => {
        cy.get('#demo-tab-grid').click()

        cy.get('#demo-tabpane-grid div.list-group-item')
            .eq(7)
            .trigger('mousedown', { which: 1 })

        cy.get('#demo-tabpane-grid div.list-group-item')
            .eq(1)
            .trigger('mousemove', { clientX: -150, clientY: -150 })
            .trigger('mouseup', { force: true })

        cy.get('#demo-tabpane-grid div.list-group-item')
            .eq(1)
            .should('contain', 'Eight')

        cy.get('#demo-tabpane-grid div.list-group-item')
            .contains('Two')
            .should('exist')
    });
})