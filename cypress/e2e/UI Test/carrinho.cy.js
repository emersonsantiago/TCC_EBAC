

describe('Inserir três produtos no carrinho', () => {
 
 
  it('Inserir produtos no carrinho de compras e validar quantidade', () => {
    
    cy.addCarrinho('5', 'Red', '32')
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')
    cy.addCarrinho('4', 'Black', '36')
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')
    cy.addCarrinho('3', 'Green', 'L')
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', '3')
        
  })


})