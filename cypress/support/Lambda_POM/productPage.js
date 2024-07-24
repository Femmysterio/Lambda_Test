class productPage{

    accessoriesElements = {
        phones: () => cy.contains('Phones & PDAs (75)').click(),
        inStock: () => cy.get('#mz-fss-0--1').check({force:true}),
        title: () => cy.title().should('eq', 'Phones & PDAs')   
    }


    HTC_TouchPage = {
        HTC_touchLink: () => cy.get('.text-ellipsis-2').contains('HTC Touch HD').click(),
        assertPage: () => cy.get('.h3').should('contain', 'HTC Touch HD'),
        inStock: () => cy.get('.badge-success').should('contain', 'In Stock')
        .and('be.visible'),
        addToCartbtn: () => cy.get('#entry_216842').click()
        
    }
    

    ipodShuffle = {
        ipodShuffleLink: () => cy.contains('iPod Shuffle').click({force:true}),
        assertPage: () => cy.get('.h3').should('contain', 'iPod Shuffle'),
        inStock: () => cy.get('.badge-success').should('contain', 'In Stock'),
        addToCartbtn: () => cy.contains('Add to Cart').click({force:true})
    }

    numberOfItemsInCart(value) {
        cy.get('.cart-item-total').should('contain', value)
    }
    
    cart = {
        cartLink: () => cy.get('.cart-icon').eq(0).click(),
        editCart: () => cy.contains('Edit cart').click({force:true}),
        removeProduct: () => cy.get('.btn-danger > .fas').click()      
    }

    contactUsForm = {
        askQuestionlink: () => cy.get('#entry_216850').click(),
        inputYourName: (value) => cy.get('[placeholder="Your name"]').type(value),
        inputEmail: (value) => cy.get('[placeholder="Your email"]').type(value),
        inputSubject: (value) => cy.get('[placeholder="Subject"]').type(value),
        inputMessage: (value) => cy.get('[placeholder="Message"]').type(value),
        sendMessageBtn: () => cy.contains('Send message').click(),

        alertSuccessMsg: () => cy.get('.alert-success').should('include.text', 'successfully sent to the store owner! ')
    }
}
module.exports = new productPage;