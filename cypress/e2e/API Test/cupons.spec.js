
describe('Testes da API de Cupons', () => {

    const token = "YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy";

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
                "code": "GANHE15",
                "amount": "15.00",
                "dicount_type": "fixed_product",
                "description": "Cupom de 15% para teste"
            }
        })


    });

});
