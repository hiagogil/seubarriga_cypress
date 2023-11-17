Cypress.Commands.add('Login', () => {
        cy.get('#email').type('Jude_Fahey59@hotmail.com')           
        cy.get('#senha').type('gbQDAJVwwCeCjX0')
        cy.get('.btn').click()
        cy.get('.alert').should('have.text', 'Bem vindo, Julia_Smitham!')
})