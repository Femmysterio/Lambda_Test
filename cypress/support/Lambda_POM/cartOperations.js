class cartOperations {

    verifyItemsInCart() {
        cy.get('form > .table-responsive > .table').each(($row, index) => {
            cy.wrap($row).within(() => {
                cy.get('tbody > :nth-child(1) > :nth-child(2)').then((e) => {
                    cy.log(e.text())  //will display 'HTC Touch HD'
                    const item = e.text()
                    expect(item).to.include('HTC Touch HD')
                })

                cy.get('tbody > :nth-child(2) > :nth-child(2)').then((e) => {
                    cy.log(e.text())  //will display 'iPod Shuffle' 
                    const item = e.text()
                    expect(item).to.include('iPod Shuffle')
                })
            })
        })
    }

    verifyUnitPriceInCart(itemText, priceOfItem) {
        cy.get('form > .table-responsive > .table > tbody > tr > td:nth-child(2)').each(($el, index) => {
            var text = $el.text()
            if (text.includes(itemText)) {
                cy.get('form > .table-responsive > .table > tbody > tr > td:nth-child(5)').eq(index).then((price) => {
                    var unitPrice = price.text();
                    expect(unitPrice.trim()).to.equal(priceOfItem)
                })
            }
        })
    }

    updateItemQuantity(value) {
        cy.get('form > .table-responsive > .table').within(() => {

            cy.get('.form-control').eq(0).clear().type(2)
            cy.get('.input-group-append .btn-primary').eq(0).click()

                cy.get('tbody > :nth-child(1) > :nth-child(6)').invoke('text').then((subtotalText) => {
                    const updatedTotal = parseFloat(subtotalText.replace(/[^\d.-]/g, ''))

                    expect(updatedTotal).to.equal(value)
                })
            
        })
    }

    updateSuccessMessage() {
        return cy.get('.alert-dismissible')
    }

    
}
module.exports = new cartOperations;