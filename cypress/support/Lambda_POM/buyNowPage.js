/// <reference types="cypress" />

class buyNowPage {
    
    Elements = {
        buyNowBtn: () => cy.get('#entry_216843 > .text').click(),
        newAddressCheckBox: () => cy.get('#input-payment-address-new').check({force:true}),

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
        continueBtn: () => cy.get('#button-save').click(),

        confirmOrderPage: () => cy.get('.page-title').should('have.text', 'Confirm Order'),
        confirmOrderBtn: () => cy.get('#button-confirm').click(),

        successfulOrderPage: () => cy.get('.page-title').should('include.text', 'Your order has been placed!')
    }

    continueToHomePage() {
        cy.contains('Continue').click()
    }
}

module.exports = new buyNowPage