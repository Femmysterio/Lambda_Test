/// <reference types="cypress" />

import homePage from '../../support/Lambda_POM/homePage';
import mainPage from '../../support/Lambda_POM/mainPage';
import productPage from '../../support/Lambda_POM/productPage';


describe('Validate Adding Multiple items', () => {

    const email = 'femi17@gmail.com'
    const userName = 'femmysterio'

    it('Verify Adding Products to cart Multiple times', () => {

        homePage.visit()
        homePage.accountbtn()
        cy.login(email, userName)

        mainPage.categoryLink()
        mainPage.categories()

        productPage.accessoriesElements.phones()
        productPage.HTC_TouchPage.HTC_touchLink()

        Cypress._.times('5', (x) => {
            productPage.HTC_TouchPage.addToCartbtn()
        })

        cy.go(-1)

        Cypress._.times('3', (x) => {
            productPage.ipodShuffle.addToCartbtn()
        })

        //productPage.cart.cartLink()
        productPage.cart.cartLink().then(($el) => {
            expect($el.text()).to.equal('  8 ')
        })
        productPage.cart.editCart()
        cy.wait(3000)
        productPage.cart.removeProduct()
    });
})