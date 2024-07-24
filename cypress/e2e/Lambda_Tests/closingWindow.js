/// <reference types="cypress" />

import homePage from '../../support/Lambda_POM/homePage';
import mainPage from '../../support/Lambda_POM/mainPage';
import productPage from '../../support/Lambda_POM/productPage';


describe('validate various Cart actvities', () => {

    it('Verify the site is not retaining the items in my cart, when closing the site and opening the site back,  ', () => {

        homePage.visit()
    homePage.accountbtn()
    cy.login('femi17@gmail.com', 'femmysterio')

    mainPage.categoryLink()
    mainPage.categories()

    productPage.accessoriesElements.phones()
    productPage.accessoriesElements.inStock()
    productPage.accessoriesElements.title()

    //Add a product to Cart
    productPage.HTC_TouchPage.HTC_touchLink()
    productPage.HTC_TouchPage.assertPage()
    productPage.HTC_TouchPage.inStock()
    productPage.HTC_TouchPage.addToCartbtn()
    cy.wait(2000)
    cy.go(-2)

    //Add another product to cart
    productPage.ipodShuffle.ipodShuffleLink()
    productPage.ipodShuffle.assertPage()
    productPage.ipodShuffle.inStock()
    productPage.ipodShuffle.addToCartbtn()

        // Close the current tab or window (simulate closing)
        cy.window().then(win => {
            win.close();
        });

        cy.wait(2000)

        homePage.visit()

        //Assert that we're back on the site
        cy.url().should('eq', 'https://ecommerce-playground.lambdatest.io/')

        productPage.numberOfItemsInCart('')

        //its not retaining the customers cart items after closing window
    })

})