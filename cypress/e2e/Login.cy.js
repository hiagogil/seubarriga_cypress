describe('Login', () => {
    beforeEach(() => {
        cy.visit('login')
    });
    it('Realizar login com sucesso', () => {
    cy.Login()
    });


    it('Login inválido', () => {
        cy.visit('login')
        cy.get('#email').type('Jude_Faheewewewey59@hotmail.com')           
        cy.get('#senha').type('gbQDAJVwwCeewewewewCjX0')
        cy.get('.btn').click()
        cy.get('.alert').should('have.text', 'Problemas com o login do usuário')
    });
});