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
 Cypress.Commands.add('register', (Gender, FirstName, LastName, Email, Password, ConfirmPassword) => {
    cy.visit('/register')
    cy.get('input[type="radio"]').check()
    cy.get('input[name="FirstName"]').type(FirstName)
    cy.get('input[name="LastName"]').type(LastName)
    cy.get('input[name="Email"]').type(Email)
    cy.get('input[name="Password"]').type(Password)
    cy.get('input[name="ConfirmPassword"]').type(ConfirmPassword)
    cy.get('#register-button').click()
    cy.screenshot()
    cy.get('.page-body > .buttons > .button-1').click()
});
Cypress.Commands.add('login', (text, password, RememberMe) => {
    cy.visit('/login')
    cy.get('#Email').type(text)
    cy.get('input[type="password"]').type(password)
    cy.get('input[type="checkbox"]').check()
    cy.get('form > .buttons > .button-1').click()
    cy.screenshot()

});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })