/// <reference types="cypress" />

import homePage from '../../support/Lambda_POM/homePage';
import mainPage from '../../support/Lambda_POM/mainPage';
import productPage from '../../support/Lambda_POM/productPage';
import buyNowPage from '../../support/Lambda_POM/buyNowPage';

const firstName = 'Oluwafemi'
const lastName = 'Orungbeja'
const company = 'femmysterio Nigeria Limited'
const address1 = '3, Aluko str, Akute, Ogun State.'
const address2 = '71, Otitokoro str, ikotun, Lagos State.'
const city = 'Akute'
const postalCode = +23401
const country = 'Nigeria'
const region = 'Lagos'
const comment = 'Ship my order to Nigeria Asap, thanks.'

describe('validate purchase of product', () => {

    it('Verify User can Buy product', () => {

        homePage.visit()
        homePage.accountbtn()
        cy.login('femi17@gmail.com', 'femmysterio')

        mainPage.categoryLink()
        mainPage.categories()

        productPage.accessoriesElements.phones()
        productPage.HTC_TouchPage.HTC_touchLink()

        buyNowPage.Elements.buyNowBtn();
        buyNowPage.Elements.newAddressCheckBox();

        buyNowPage.Elements.typeFirstName(firstName);
        buyNowPage.Elements.typeLastName(lastName);
        buyNowPage.Elements.typeCompany(company);
        buyNowPage.Elements.typeAddress1(address1);
        buyNowPage.Elements.typeAddress2(address2);
        buyNowPage.Elements.typeCity(city);
        buyNowPage.Elements.typePostCode(postalCode);
        buyNowPage.Elements.selectCountry(country).should('have.value', 156)
        buyNowPage.Elements.selectRegion(region).should('have.value', 2412)
        buyNowPage.Elements.typeComment(comment)
        buyNowPage.Elements.termsAndConditions()

        buyNowPage.Elements.continueBtn();
        buyNowPage.Elements.confirmOrderPage()
        buyNowPage.Elements.confirmOrderBtn();
        buyNowPage.Elements.successfulOrderPage(); 

        buyNowPage.continueToHomePage()

        cy.clearAllCookies()
    })

})