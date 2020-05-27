
const randomString = require('../support/randStr')

describe('estsy.com user registration flow', () => {

    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl)
    });

    it('Create an account into the site', function () {
        const randString = randomString.randStr()
        const email = randString + '@domain.com'

        cy.register(email, randString)

        cy.logout()
    })

    it('Create an automate script to test the required fields', function () {
        cy.get('.select-signin').click()
        cy.get('.select-register').click()
        cy.contains('Registration is easy.')
        cy.get('[value="register"]').eq(1).click()

        cy.get('#aria-join_neu_email_field-error').should('be.visible')
        cy.get('#aria-join_neu_first_name_field-error').should('be.visible')
        cy.get('#aria-join_neu_password_field-error').should('be.visible')
    })

    it('Login into the site with different users', function () {
        var users = new Array()
        for (let i = 0; i < 3; i++) {
            const randString = randomString.randStr()
            users.push(randString)
            let email = randString + '@domain.com'

            cy.register(email, randString)

            cy.logout()
        }

        for (let i = 0; i < 3; i++) {
            cy.get('.select-signin').click()
            let email = users[i] + '@domain.com'
            cy.login(email, users[i])

            cy.logout()

        }
    })

    it('Create an automated script to test a failed attempt at login', function () {
        const randString = randomString.randStr()
        const email = randString + '@domain.com'

        cy.failLogin(email, randString)
    })

})
