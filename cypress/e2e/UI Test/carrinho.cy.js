

describe('Inserir três produtos no carrinho', () => {
 
 
  it('Inserir produtos no carrinho de compras', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/');
    cy.get('.vc_custom_1503474667302').contains("Ingrid").click();
    cy.get('.button-variable-item-S').click();
    cy.get('.button-variable-item-Orange').click();
    cy.get('.variations_form').contains("Comprar").click();
    cy.get('.woocommerce-message').should('contain', '“Ingrid Running Jacket” foi adicionado no seu carrinho.');
    cy.get('.logo-in-theme > .logo > a > .logo-img').click();

    cy.get('.vc_custom_1503474667302').contains("Augusta").click();
    cy.get('.button-variable-item-S').click();
    cy.get('.button-variable-item-Orange').click();
    cy.get('.variations_form').contains("Comprar").click();
    cy.get('.woocommerce-message').should('contain', '“Augusta Pullover Jacket” foi adicionado no seu carrinho.');
    cy.get('.logo-in-theme > .logo > a > .logo-img').click();

    cy.get('.vc_custom_1503474667302').contains("Stella").click();
    cy.get('.button-variable-item-S').click();
    cy.get('.button-variable-item-Red').click();
    cy.get('.variations_form').contains("Comprar").click();
    cy.get('.woocommerce-message').should('contain', '“Stellar Solar Jacket” foi adicionado no seu carrinho.');
    
  })


})