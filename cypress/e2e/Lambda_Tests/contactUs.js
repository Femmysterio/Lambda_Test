/// <reference types="cypress" />

import homePage from '../../support/Lambda_POM/homePage';
import mainPage from '../../support/Lambda_POM/mainPage';
import productPage from '../../support/Lambda_POM/productPage';


describe('Validate Contact Us page', () => {

    const email = 'femi17@gmail.com'
    const userName = 'femmysterio'
    const fullName = 'Oluwafemi Orungbeja'
    const subjText = 'Cypress end-2-end test framework'
    const msgText = "I'm job searching"

    it('Verify Contact Us Form submission', () => {

        //To run a test multiple times

        Cypress._.times(2, (x) => {

        homePage.visit()
        homePage.accountbtn()
        cy.login(email, userName)

        mainPage.categoryLink()
        mainPage.categories()

        productPage.accessoriesElements.phones()
        productPage.HTC_TouchPage.HTC_touchLink()

        productPage.contactUsForm.askQuestionlink()
        productPage.contactUsForm.inputYourName(fullName)
        productPage.contactUsForm.inputEmail(email)
        productPage.contactUsForm.inputSubject(subjText)
        productPage.contactUsForm.inputMessage(msgText)
        productPage.contactUsForm.sendMessageBtn()
        productPage.contactUsForm.alertSuccessMsg()

        cy.clearAllCookies()
        })

    })

})