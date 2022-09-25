

describe('Inserir três produtos no carrinho', () => {
 
 
  it('Inserir produtos no carrinho de compras', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/');
    cy.escolherProduto('Ingrid Running Jacket');
    cy.get('.button-variable-item-S').click();
    cy.get('.button-variable-item-Orange').click();
    cy.get('.variations_form').contains("Comprar").click();
    cy.validarCarrinho('Ingrid Running Jacket'); //validar se o produto foi adicionado no carrinho com sucesso

    cy.escolherProduto('Augusta Pullover Jacket');
    cy.get('.button-variable-item-S').click();
    cy.get('.button-variable-item-Orange').click();
    cy.get('.variations_form').contains("Comprar").click();
    cy.validarCarrinho('Augusta Pullover Jacket');

    cy.escolherProduto('Stellar Solar Jacket');
    cy.get('.button-variable-item-S').click();
    cy.get('.button-variable-item-Red').click();
    cy.get('.variations_form').contains("Comprar").click();
    cy.validarCarrinho('Stellar Solar Jacket');
    
  })


})