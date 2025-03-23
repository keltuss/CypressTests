Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Web Tables Testing', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.get('svg[viewBox="0 0 448 512"]').click()

    })


    it('Searching', () => {
        cy.get('#item-3').click()
        cy.get('#searchBox').click().type('Cierra')
        cy.contains('div.rt-td', 'Cierra')

        cy.get('#searchBox').clear().type('Cantrell')
        cy.contains('div.rt-td', 'Cantrell')

        cy.get('#searchBox').clear().type('45')
        cy.contains('div.rt-td', '45')

        cy.get('#searchBox').clear().type('alden@example.com')
        cy.contains('div.rt-td', 'alden@example.com')

        cy.get('#searchBox').clear().type('12000')
        cy.contains('div.rt-td', '12000')

        cy.get('#searchBox').clear().type('Compliance')
        cy.contains('div.rt-td', 'Compliance')

    })

    it('Adding', () => {

        cy.get('#item-3').click()
        cy.get('button[id="addNewRecordButton"]').click()
        cy.get('input[id="firstName"]').click().type('Victor')
        cy.get('input[id="lastName"]').click().type('Johnson')
        cy.get('input[id="userEmail"]').click().type('name@example.com')
        cy.get('input[id="age"]').click().type('40')
        cy.get('input[id="salary"]').click().type('12345')
        cy.get('input[id="department"]').click().type('Education')
        cy.get('button[id="submit"]').click()
    })

    it('Adding with wrong email and salary', () => {

        cy.get('#item-3').click()
        cy.get('button[id="addNewRecordButton"]').click()
        cy.get('input[id="firstName"]').click().type('Victor')
        cy.get('input[id="lastName"]').click().type('Johnson')
        cy.get('input[id="userEmail"]').click().type('name')
        cy.get('input[id="age"]').click().type('40')
        cy.get('input[id="salary"]').click().type('Hello')
        cy.get('input[id="department"]').click().type('Education')
        cy.get('button[id="submit"]').click()

        cy.get('input[id="userEmail"]')
            .then(($input) => {expect($input[0].checkValidity()).to.be.false;});
        cy.get('input[id="salary"]')
            .then(($input) => {expect($input[0].checkValidity()).to.be.false;});
    })

    it('Editing', () => {
        cy.get('#item-3').click()
        cy.get('#edit-record-1').click()
        cy.get('input[id="firstName"]').dblclick().clear().type('Victoria')
        cy.get('button[id="submit"]').click()
        cy.get('#searchBox').click().type('Victoria')
        cy.contains('div.rt-td', 'Victoria')
    })

    it('Deleting', () => {
        cy.get('#item-3').click()
        cy.get('#delete-record-1').click()
        cy.contains('td', 'Cierra', ).should('not.exist')
    })

    it('Selecting rows', () => {
        cy.get('#item-3').click()
        cy.get('select[aria-label="rows per page"]').select('5')
        cy.get('select[aria-label="rows per page"]').select('10')
        cy.get('select[aria-label="rows per page"]').select('20')
        cy.get('select[aria-label="rows per page"]').select('25')
        cy.get('select[aria-label="rows per page"]').select('50')
        cy.get('select[aria-label="rows per page"]').select('100')
    })

    it('Next and previous pages', () => {

        cy.get('#item-3').click()
        cy.get('select[aria-label="rows per page"]').select('5')

        cy.get('button[id="addNewRecordButton"]').click()
        cy.get('input[id="firstName"]').click().type('Victoria')
        cy.get('input[id="lastName"]').click().type('Johnson')
        cy.get('input[id="userEmail"]').click().type('name1@example.com')
        cy.get('input[id="age"]').click().type('40')
        cy.get('input[id="salary"]').click().type('12345')
        cy.get('input[id="department"]').click().type('Education')
        cy.get('button[id="submit"]').click()

        cy.get('button[id="addNewRecordButton"]').click()
        cy.get('input[id="firstName"]').click().type('John')
        cy.get('input[id="lastName"]').click().type('Johnson')
        cy.get('input[id="userEmail"]').click().type('name2@example.com')
        cy.get('input[id="age"]').click().type('40')
        cy.get('input[id="salary"]').click().type('12345')
        cy.get('input[id="department"]').click().type('Education')
        cy.get('button[id="submit"]').click()

        cy.get('button[id="addNewRecordButton"]').click()
        cy.get('input[id="firstName"]').click().type('Bill')
        cy.get('input[id="lastName"]').click().type('Johnson')
        cy.get('input[id="userEmail"]').click().type('name4@example.com')
        cy.get('input[id="age"]').click().type('40')
        cy.get('input[id="salary"]').click().type('12345')
        cy.get('input[id="department"]').click().type('Education')
        cy.get('button[id="submit"]').click()

        cy.get('button[id="addNewRecordButton"]').click()
        cy.get('input[id="firstName"]').click().type('Bob')
        cy.get('input[id="lastName"]').click().type('Johnson')
        cy.get('input[id="userEmail"]').click().type('name5@example.com')
        cy.get('input[id="age"]').click().type('40')
        cy.get('input[id="salary"]').click().type('12345')
        cy.get('input[id="department"]').click().type('Education')
        cy.get('button[id="submit"]').click()

        cy.contains('button', 'Next').click()

        cy.contains('button', 'Previous').click()
    })

})
