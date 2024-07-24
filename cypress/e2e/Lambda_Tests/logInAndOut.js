/// <reference types="cypress" />

import homePage from '../../support/Lambda_POM/homePage';


describe('Validate Log In and Log Out', () => {

    const email = 'femi17@gmail.com'
    const userName = 'femmysterio'
    
    beforeEach(() => {
        homePage.visit()
        homePage.accountbtn()
    })

    it('Verify User can log In successfully', () => {
        cy.login(email, userName)
    });

    it('Verify User can log Out successfully', () => {
        cy.login(email, userName)
        cy.logout()
    });
})