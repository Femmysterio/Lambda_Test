/// <reference types="cypress" />

import homePage from '../../support/Lambda_POM/homePage';
import registerPage from '../../support/Lambda_POM/registerPage'


const firstNme = 'Oluwafemi'
const lastNme = 'Orungbeja'
const emailAddress = 'femi17@gmail.com'
const phoneNumber = '08172758540'
const passWord = 'femmysterio'
const accountCreatedMsg = ' Your Account Has Been Created!'
const errorMsg = 'E-Mail Address is already registered!'


describe('validate sign up ', () => {
    let randomString = Math.random().toString(36).substring(2); //to generate random string
    const randomEmail = "Auto_email" + randomString + "@gmail.com"

    it('verify Account is created successfully', () => {
        homePage.visit();
        homePage.accountbtn()
        registerPage.registerbtn()
        registerPage.firstName(firstNme)
        registerPage.lastName(lastNme)
        registerPage.email(randomEmail)
        registerPage.telephone(phoneNumber)
        registerPage.password(passWord)
        registerPage.confirmPassword(passWord)

        registerPage.privacyPolicy()
        registerPage.submit()
        cy.wait(2000)
        
        registerPage.accountCreated().should('contain', accountCreatedMsg)
        cy.wait(3000)
    })

    it('Verify Error Message, "email already in use", while signup process continues', () => {
        homePage.visit();
        homePage.accountbtn()
        registerPage.registerbtn()
        registerPage.firstName(firstNme)
        registerPage.lastName(lastNme)
        registerPage.email(emailAddress)
        registerPage.telephone(phoneNumber)
        registerPage.password(passWord)
        registerPage.confirmPassword(passWord)

        registerPage.privacyPolicy()
        registerPage.submit()

        registerPage.errorMsgAccountCreated().should('contain', errorMsg)
    })

})