import {faker} from '@faker-js/faker'
describe('Cadastrar usuários', () => {
  const user = {
    nome: faker.internet.userName(),
    email: faker.internet.email(),
    senha: faker.internet.password()
  }
  beforeEach(() => {
    cy.visit('cadastro')
  })
  it('Cadastrar usuários com dados aleatórios', () => {
    cy.get('#nome').type(user.nome)
    cy.get('#email').type(user.email)
    cy.get('#senha').type(user.senha)
    cy.get('.btn').click()
    cy.get('.alert').should('have.text', 'Usuário inserido com sucesso')
  })
})