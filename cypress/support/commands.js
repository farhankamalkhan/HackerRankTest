// Add command to logout
Cypress.Commands.add("logout", () => {
    cy.get('.user-nav').click()
    cy.get('.sign-out').click()
})

// Add command to login
Cypress.Commands.add("login", (email, user) => {
    cy.get('#join_neu_email_field').type(email)
    cy.get('#join_neu_password_field').type(user)
    cy.get('[value="sign-in"]').last().click()
    cy.contains('Welcome back').should('contain.text', user)

})

// Add command to register
Cypress.Commands.add("register", (email, user) => {
    cy.get('.select-signin').click()
    cy.get('.select-register').click()
    cy.contains('Registration is easy.')
    cy.get('[id="join_neu_email_field"]').type(email)
    cy.get('[id="join_neu_first_name_field"]').type(user)
    cy.get('[id="join_neu_password_field"]').type(user)
    cy.get('[value="register"]').eq(1).click()
    cy.contains('Welcome back').should('contain.text', user)
})

// Add command to fail login
Cypress.Commands.add("failLogin", (email, user) => {
    cy.get('.select-signin').click()
    cy.get('#join_neu_email_field').type(email)
    cy.get('#join_neu_password_field').type(user)
    cy.get('[name="submit_attempt"]').click()
    cy.get('[id="aria-join_neu_email_field-error"]').should('be.visible')
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
