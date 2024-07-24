/// <reference types="cypress" />

import homePage from '../../support/Lambda_POM/homePage';
import mainPage from '../../support/Lambda_POM/mainPage';
import productPage from '../../support/Lambda_POM/productPage';
import cartOperations from '../../support/Lambda_POM/cartOperations';
import checkOutPage from '../../support/Lambda_POM/checkOutPage';


beforeEach(() => {
    homePage.visit()
    homePage.accountbtn()
    cy.login('femi17@gmail.com', 'femmysterio')

    mainPage.categoryLink()
    mainPage.categories()

    productPage.accessoriesElements.phones()
    productPage.accessoriesElements.inStock()
    productPage.accessoriesElements.title()

    //Add a product to cart
    productPage.HTC_TouchPage.HTC_touchLink()
    productPage.HTC_TouchPage.assertPage()
    productPage.HTC_TouchPage.inStock()
    productPage.HTC_TouchPage.addToCartbtn()
    cy.wait(2000)
    cy.go(-2)

    //Add a product to cart
    productPage.ipodShuffle.ipodShuffleLink()
    productPage.ipodShuffle.assertPage()
    productPage.ipodShuffle.inStock()
    productPage.ipodShuffle.addToCartbtn()

})

afterEach(() => {
    productPage.cart.cartLink()
    productPage.cart.editCart()
    cy.get('.btn-danger').first().click()
    cy.get('.btn-danger').last().click()
})

const successMsg = ' Success: You have modified your shopping cart!'

describe('validate various Cart actvities', () => {


    it('verify Add products to cart', () => {

        //verify number of items in Cart gets incremented when another item is added
        productPage.numberOfItemsInCart(2)
    })


    it('Verify display of all items in cart Page', () => {

        //Go to Cart Page
        productPage.cart.cartLink()
        productPage.cart.editCart()

        //Verify items displayed in the cart
        cartOperations.verifyItemsInCart()
    })


    it('Verify items and their prices in cart Page', () => {

        //Go to Cart Page
        productPage.cart.cartLink()
        productPage.cart.editCart()

        cartOperations.verifyUnitPriceInCart('HTC Touch HD', '$120.00')
        cartOperations.verifyUnitPriceInCart('iPod Shuffle', '$150.00')
    })

    it('Verify the updated contents added to my cart - verify the price reflects that too', () => {

        //Go to Cart Page
        productPage.cart.cartLink();
        productPage.cart.editCart();

        //Update item Quantity and verify price update 
        cartOperations.updateItemQuantity(240.00)
        cartOperations.updateSuccessMessage().should('contain.text', successMsg)

    })

    it('Verify Checkout', () => {

        productPage.cart.cartLink();
        productPage.cart.editCart();

        checkOutPage.Elements.checkOutBtn();
        checkOutPage.Elements.continueBtn()
    })
})