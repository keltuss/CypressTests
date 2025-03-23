Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Practice form', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.get('svg[baseProfile="tiny"]').click()
        cy.contains('span', 'Practice Form').click()
    })

    it('Full Form', () => {

        const fileName = 'test-file.txt';

        cy.get('#firstName').click().type('Victor')
        cy.get('#lastName').click().type('Johnson')
        cy.get('#userEmail').click().type('johnson@example.com')
        cy.get('label[for="gender-radio-1"]').should('be.visible').click()
        cy.get('label[for="gender-radio-2"]').should('be.visible').click()
        cy.get('label[for="gender-radio-3"]').should('be.visible').click()
        cy.get('label[for="gender-radio-1"]').click()
        cy.get('#userNumber').click().type('0123456789')
        cy.get('#dateOfBirthInput').click()
        cy.get('select[class="react-datepicker__year-select"]').select('2000')
        cy.get('select[class="react-datepicker__month-select"]').select('January')

        cy.get('.react-datepicker__day')
            .not('.react-datepicker__day--outside-month')
            .contains('1').click()

        cy.get('#dateOfBirthInput')
            .should('have.value', '01 Jan 2000');


        cy.get('div[class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"')
            .type('Math{enter}').type('English{enter}')
        cy.get('label[for="hobbies-checkbox-1"]').should('be.visible').click()
        cy.get('label[for="hobbies-checkbox-2"]').should('be.visible').click()
        cy.get('label[for="hobbies-checkbox-3"]').should('be.visible').click()
        cy.get('label[for="hobbies-checkbox-1"]').click()

        cy.get('#uploadPicture').should('be.visible')
        cy.get('#uploadPicture').attachFile(fileName);

        cy.get('#currentAddress').click().type('Main Street, 10')

        cy.get('div[id="state"]').type('NCR{enter}')
        cy.get('div[id="city"]').type('Delhi{enter}')

        cy.get('#submit').click()

        cy.get('#closeLargeModal').click()

    })

        it('Form with Mistakes', () => {

        cy.get('#submit').click()

        cy.get('#closeLargeModal').should('not.exist')

    })



})