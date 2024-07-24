/// <reference types="cypress" />

import homePage from '../../support/Lambda_POM/homePage';
import mainPage from '../../support/Lambda_POM/mainPage';

const collection1 = 'HTC Touch HD'
const collection2 = 'Apple Cinema 30'
const collection3 = 'Palm Treo Pro'
const product1 = 'macbook'
const product2 = 'apple'
const fullName = 'Oluwafemi Orungbeja'
const reviewTxt = 'the product is the one of my favorite, but there is always room for improvement'
const successMsg = 'Thank you for your review. It has been submitted '
const reviewMsg = 'There are no reviews for this product. '


beforeEach(() => {
    homePage.visit()
    homePage.accountbtn()
    cy.login('femi17@gmail.com', 'femmysterio')
})

describe('validate Search functionality', () => {

    it('should verify search results are related/significant', () => {

        cy.clearAllCookies()
        //mainPage.Search('macbook')
        mainPage.search.typeProduct(product1);
        mainPage.search.clickSearchBtn();
        mainPage.search.verifySearchDisplay()

        mainPage.search.verifyProductsTitle('macbook')
    });


    it('Scroll and Verify items under TOP COLLECTIONS Header', () => {

        cy.clearAllCookies()
        mainPage.elements.homeLink()
        mainPage.elements.topCollectionHeader().scrollIntoView()
        mainPage.elements.topCollectionHeader().should('be.visible')

        // Verify the items in TOP COLLECTIONS
        mainPage.elements.verifyTopCollectionList(collection1, collection2, collection3)
    });


    it('Verify a user is able to write or view reviews', () => {

        cy.clearAllCookies()

        mainPage.elements.homeLink()
        mainPage.elements.topCollectionHeader().scrollIntoView()

        mainPage.appleCinemaProduct()
        mainPage.review.reviewRating()
        mainPage.review.inputName(fullName)
        mainPage.review.inputReview(reviewTxt)
        mainPage.review.writeReviewBtn()
        mainPage.review.reviewSuccessMessage().should('include.text', successMsg)


        mainPage.review.reviewBtn()
        mainPage.review.reviewMessage().should('have.text', reviewMsg)
    });


    it('Verify In-stock/Out-of-stock product functionality', () => {
        cy.clearAllCookies()
        cy.wait(2000)

        mainPage.search.typeProduct(product2);
        mainPage.search.clickSearchBtn();

        mainPage.search.clickFirstSearchItem()
        mainPage.search.verifyInStock()

    });
})