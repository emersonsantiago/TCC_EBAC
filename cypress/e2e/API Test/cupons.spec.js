
const faker = require('faker-br');


describe('Testes da API de Cupons', () => {

    const token = "YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy";
    const numero = faker.random.number();
    const valor = faker.finance.amount();

    it('Deve listar todos os cupons cadastrados', () => {
        cy.request({
            method: 'GET',
            url: 'coupons',
            headers: {
              authorization: `Basic ${token}`
            }
        }).should((response) => {
            cy.log(response);
            expect(response.status).to.equal(200)
        })
    });


    it('Deve cadastrar cupom com sucesso', () => {
        
        cy.request({
            method: 'POST',
            url: 'coupons',
            headers: { 
                authorization: `Basic ${token}` 
            },
            body: {
                "code": "GANHE" + numero,
                "amount": valor,
                "dicount_type": "fixed_product",
                "description": "Cupom " + numero + " para teste"
            }
        })


    });

});
