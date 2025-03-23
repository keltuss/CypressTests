Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Date Picker', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
        cy.contains('div', 'Widgets').click()
        cy.contains('li.btn', 'Date Picker').click()
    })

    it('Select Date', () => {

        cy.get('#datePickerMonthYearInput').click()
        cy.get('select[class="react-datepicker__year-select"]').select('2000')
        cy.get('select[class="react-datepicker__month-select"]').select('September')

        cy.get('.react-datepicker__day').
        not('.react-datepicker__day--outside-month').contains('10').click()

        cy.get('#datePickerMonthYearInput').should('have.value', '09/10/2000')
    })


    it('Date and Time', () => {

        cy.get('#dateAndTimePickerInput').click()
        cy.get('span[class="react-datepicker__year-read-view--down-arrow"]').click()
        cy.get('a[class="react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"]')
            .click().click().click()
        cy.get('a[class="react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"]')
            .click().click().click()
        cy.get('div[class="react-datepicker__year-option"]').contains('2024').click()

        cy.get('div[class="react-datepicker__month-read-view"]').click()
        cy.get('div[class="react-datepicker__month-option"]').contains('September').click()

        cy.get('.react-datepicker__day').
        not('.react-datepicker__day--outside-month').contains('2').click()

        cy.get('.react-datepicker__time-list-item')
            .contains('10:00')
            .click()

        cy.get('#dateAndTimePickerInput').should('have.value', 'September 2, 2024 10:00 AM')
    })

})