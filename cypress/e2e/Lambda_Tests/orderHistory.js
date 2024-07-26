/// <reference types="cypress" />

import homePage from '../../support/Lambda_POM/homePage';


describe('Validate Order history', () => {

  const email = 'femi17@gmail.com'
  const userName = 'femmysterio'

  it("Calculate and assert the total age of all users", () => {

    homePage.visit()
    homePage.accountbtn()
    cy.login(email, userName)

    //let totalAmount = 0
    homePage.orderHistory()
    
    homePage.totalOrderPrice(1715)
    
  });

})