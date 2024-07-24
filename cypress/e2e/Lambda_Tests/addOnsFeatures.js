/// <reference types="cypress" />

import homePage from '../../support/Lambda_POM/homePage';


describe('Validate Adding Multiple items', () => {

    const email = 'femi17@gmail.com'
    const userName = 'femmysterio'
    const productName = 'Nikon'

    it('Verify Adding Products to cart Multiple times', () => {

        homePage.visit()
        homePage.accountbtn()
        cy.login(email, userName)

        homePage.addOns.addOnsLink()
        homePage.addOns.modulesLink()
        cy.wait(2000)
        homePage.addOns.brandHeader()

        homePage.addOns.ProductLink(productName)
        homePage.addOns.clickProduct()
        homePage.addOns.verifyHeader()
        homePage.addOns.logAvailability()
        //homePage.addOns.clickProduct(productName)
    })    
})