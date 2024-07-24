/// <reference types="cypress" />

import homePage from '../../support/Lambda_POM/homePage';

beforeEach(() => {
    homePage.visit()
})

describe('Verify Main Elements', () => {

  it("should verify the presence and functionality of the logo", () => {

    homePage.homepageLogo().should('be.visible')
    homePage.homepageLogo().click()
    
    homePage.verifyHomepageUrl()
  });


  it("should verify the presence and functionality of the navigation menu", () => {

    homePage.navigationMenu.visible()
    homePage.navigationMenu.length(39)

    homePage.navigationMenu.logItems()
  });


  it("should verify the presence and functionality of the search bar", () => {

    homePage.searchBar.visible()
    homePage.searchBar.inputSearch('samsung')
    homePage.searchBar.searchBtn()

    homePage.searchBar.verifySearchedItem('Search - samsung') 
  });


  it("should verify that featured products or banners are displayed correctly", () => {

    //Verify presence of featured product section
    homePage.productThumb.featuredProducts()

    //Verify presence of image, title, price
    homePage.productThumb.verifyImageTitlePrice()
  });


})