/// <reference types="cypress" />

class checkOutPage {
    
    Elements = {
        checkOutBtn: () => cy.contains('Checkout').click({force:true}),
        typeFirstName: (value) => cy.get('#input-payment-firstname').type(value),
        typeLastName: (value) => cy.get('#input-payment-lastname').type(value),
        typeCompany: (value) => cy.get('#input-payment-company').type(value),
        typeAddress1: (value) => cy.get('#input-payment-address-1').type(value),
        typeAddress2: (value) => cy.get('#input-payment-address-2').type(value),
        typeCity: (value) => cy.get('#input-payment-city').type(value),
        typePostCode: (value) => cy.get('#input-payment-postcode').type(value),
        selectCountry: (value) => cy.get('#input-payment-country').select(value),
        selectRegion: (value) => cy.get('#input-payment-zone').select(value),
        typeComment: (value) => cy.get('#input-comment').type(value),
        termsAndConditions: () => cy.get('#input-agree').click({force:true}),
        continueBtn: () => cy.get('#button-save').click()
    }
}

module.exports = new checkOutPage