/// <reference types="cypress" />

class homePage {

    visit() {
        cy.clearAllCookies()
        cy.visit('https://ecommerce-playground.lambdatest.io/')
    }

    accountbtn() {
        cy.contains(' My account').click({ force: true })
    }

    addOns = {
        addOnsLink: () => cy.contains(' AddOns').click({ force: true }),
        modulesLink: () => cy.contains(' Modules').click({ force: true }),
        brandHeader: () => cy.get('#entry_212976').scrollIntoView().should('have.text', 'Brand'),
        ProductLink: (value) => cy.get('.figure .figure-caption').contains(value).click(),
        clickProduct: () => cy.get('.text-ellipsis-2').first().click(),
        verifyHeader: () => cy.get('div div h1').should('have.text', 'Nikon D300'),
        logAvailability: () => cy.get('.badge-danger').then(($el) => {
            cy.log('Availability: ' + $el.text())
        })
    }

    orderHistory () {
         cy.get('[href*="?route=account/order"]').contains(' Order History').click()
    }

    totalOrderPrice(value) {
        let totalAmount = 0
        cy.get('table.table-hover tbody tr').each(($row, index, $rows) => {
            

            cy.wrap($row).find('td:nth-child(5)').invoke('text').then((text) => {
              const amount = parseFloat(text.replace(/[^\d.-]/g, ''))
      
              totalAmount += amount;
            })
          }).then(() => {
            cy.log(`Total amount of Orders: $${totalAmount.toFixed(2)}`)
            expect(totalAmount).to.equal(value)
          })
    }

    homepageLogo() {
       return cy.get('#entry_217821')
    }

    verifyHomepageUrl() {
        return cy.url().should('include', '.php?route=common/home')
    }

    navigationMenu = {
        visible: () => cy.get('#entry_217831').should('be.visible'),
        length: (value) => cy.get('#entry_217831 li').should('have.length', value),
        logItems: () => cy.get('#entry_217831 li').each((eachMenu) => {

            cy.log(eachMenu.text())  
        })
    }

    searchBar = {
        visible: () => cy.get('#search').first().should('be.visible'),
        inputSearch: (value) => cy.get('#search').first().type(value),
        searchBtn: () => cy.get('.search-button').eq(0).click(),

        verifySearchedItem: (value) => cy.get('#entry_212456 > .h4').then((header) => {
            expect(header.text()).to.equal(value)
        })
    }

    productThumb = {
        featuredProducts: () => cy.get(".swiper-wrapper .swiper-slide").should('have.length.gt', 0),
        
        verifyImageTitlePrice: () => cy.get('.product-thumb').each((products) => {

            //Verify image presence
            cy.wrap(products).find('.image').should('exist');
    
            //verify title presence
            cy.wrap(products).find('.caption h4 a').should('exist')
    
            // Verify price presence
            cy.wrap(products).find('.price').should('exist')
    
        })
    }
}

module.exports = new homePage