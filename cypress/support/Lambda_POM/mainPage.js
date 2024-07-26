/// <reference types="cypress" />

class mainPage {

    categoryLink() {
        cy.contains('Shop by Category').click({ force: true })
    }

    categories() {
        cy.get('.title').eq(2).should('contain', ' Phone, Tablets & Ipod')
        cy.get('.title').eq(2).click({force:true})
    }

    search = {
        typeProduct: (searchItem) => cy.get('[name="search"]').first().type(searchItem),
        clickSearchBtn: () => cy.get('.type-text').click(),

        verifySearchDisplay: () => cy.get('.product-layout').should('have.length.gt', 0),

        verifyProductsTitle: (searchItem) => cy.get('.product-layout').each(($product) => {
            cy.wrap($product).find('.caption h4 a').invoke('text').then((productsText) => {
                expect(productsText.toLowerCase()).to.contain(searchItem)
            })
        }),

        clickFirstSearchItem: () => cy.get('.product-layout').eq(1).find('.caption').click(),
        
        verifyInStock: () => cy.get('.product-product')
            .find('.badge-success').invoke('text').then(($stockstatus) => {
                if ($stockstatus.includes('In Stock')) {
                    cy.wrap($stockstatus).then((text) => {
                        cy.log(`Stock Status: ${text}`)
                    })
                } else {
                    cy.log('Stock Status: ' + 'Out of Stock')
                }
            })
    }

    elements = {
        homeLink: () => cy.contains('span', 'Home').click({ force: true }),
        topCollectionHeader: () => cy.contains('h3', 'Top Collection'),

        verifyTopCollectionList: (item1, item2, item3) => cy.get('#mz-product-tab-39213264-0')
            .should('be.visible').then(($item) => {
                cy.wrap($item).within(() => {
                    cy.get('.caption h4 a').invoke('text').then((collectionText) => {
                        expect(collectionText).to.include(item1, item2, item3)
                    })
                })
            }),
    };

    appleCinemaProduct() {
        cy.contains('Apple Cinema 30').click({ force: true })
    };

    review = {
        reviewRating: () => cy.get('[for="rating-4-216860"]').click(),
        inputName: (fullName) => cy.get('#input-name').type(fullName),
        inputReview: (comment) => cy.get('#input-review').type(comment),
        writeReviewBtn: () => cy.get('#button-review').click(),

        reviewSuccessMessage: () => cy.get('#form-review > .alert'),

        reviewBtn: () => cy.get('[href*="tab-216814-2"]').click(),
        reviewMessage: () => cy.get('#mz-design-tab-216814-2')
    };

    
}

module.exports = new mainPage