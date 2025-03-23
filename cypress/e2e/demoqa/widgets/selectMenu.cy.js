Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Select Menu', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.contains('div', 'Widgets').click()
        cy.contains('li.btn', 'Select Menu').click()
    })

    it('Group 1 example', () => {
        cy.get('#withOptGroup').click()
        cy.get('#react-select-2-option-0-1').click()
        cy.contains('Group 1, option 2').should('be.visible')
    })

    it('Group 2 example', () => {
        cy.get('#withOptGroup').click()
        cy.get('#react-select-2-option-1-0').click()
        cy.contains('Group 2, option 1').should('be.visible')

    })

    it('Root option example', () => {
        cy.get('#withOptGroup').click()
        cy.get('#react-select-2-option-2').click()
        cy.contains('A root option').should('be.visible')

    })

    it('Select one', () => {
        cy.get('#selectOne').click()
        cy.get('#react-select-3-option-0-2').click()
        cy.contains('Mrs.').should('be.visible')
    })

    it('Old Style Select Menu', () => {
        cy.get('#oldSelectMenu')
            .select('White')
            .select('Black')
            .select('Yellow').should('be.visible')
    })

    it('Old Style Select Menu', () => {
        cy.get('div[style="opacity: 1; transition: opacity 260ms;"]').click()
        cy.get('#react-select-4-option-0').click()
        cy.get('#react-select-4-option-1').click()
        cy.get('#react-select-4-option-2').click()
        cy.get('#react-select-4-option-3').click()
        cy.get('div[style="overflow: hidden; white-space: nowrap; width: 72.7812px;"]').should('be.visible')
        cy.get('div[style="overflow: hidden; white-space: nowrap; width: 62.2188px;"]').should('be.visible')
        cy.get('div[style="overflow: hidden; white-space: nowrap; width: 68.25px;"]').should('be.visible')
        cy.get('div[style="overflow: hidden; white-space: nowrap; width: 59.9375px;"]').should('be.visible')

    })

    it('Old Style Select Menu', () => {
        cy.get('#cars').select(['Volvo', 'Saab', 'Opel', 'Audi'])
    })




})