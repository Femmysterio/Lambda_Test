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
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', (email, password) => {
    cy.contains(' My account').click({force:true})
    cy.get('.fa-sign-in-alt').click()
    cy.get('#input-email').type(email)
    cy.get('#input-password').type(password)
    cy.get('[value="Login"]').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('.fa-user').first().click({force:true});
    cy.get('.info .title').contains(' Logout').click({force:true});
    cy.get('.page-title').should('have.text', ' Account Logout')
})
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

