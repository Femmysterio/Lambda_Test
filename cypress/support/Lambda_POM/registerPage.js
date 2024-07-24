/// <reference types="cypress" />class homePage {

class registerPage {

    registerbtn() {
        cy.get('.fa-user-plus').click()
    }

    firstName(value) {
       cy.get('#input-firstname').type(value)
    }

    lastName(value) {
        cy.get('#input-lastname').type(value)
    }

    email(value) {
        cy.get('#input-email').type(value)
    }

    telephone(value) {
        cy.get('#input-telephone').type(value)
    }

    password(value) {
        cy.get('#input-password').type(value)
    }

    confirmPassword(value) {
        cy.get('#input-confirm').type(value)
    }

    privacyPolicy() {
        cy.get('#input-agree').click({force:true})
    }

    submit() {
        cy.get('[value="Continue"]').click()
    }

    accountCreated() {
        return cy.get('.page-title')
    }

    errorMsgAccountCreated() {
        return cy.get('.alert-danger')
    }

}

module.exports = new registerPage