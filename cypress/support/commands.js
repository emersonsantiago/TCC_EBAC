// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Cypress.Commands.add('escolherProduto', (nomeProduto) => {

//    cy.get('.vc_custom_1503474667302').contains(nomeProduto).click();


//});

//Cypress.Commands.add('validarCarrinho', (Produto) => {

  //  cy.get('.woocommerce-message').should('contain', Produto + ' foi adicionado no seu carrinho.');
  //  cy.get('.logo-in-theme > .logo > a > .logo-img').click();


 //});


 Cypress.Commands.add('addCarrinho', (produto, tamanho, cor) => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    cy.get('.product-block').eq(produto).click()
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click({force: true})
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.single_add_to_cart_button').click()
});