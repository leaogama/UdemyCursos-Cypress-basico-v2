/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {

    beforeEach(() => {
        cy.visit('../src/index.html')
    })

    it('verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('Preencher campos obrigatórios e enviar formulário', () => {
        let z = "Gostaria de receber uma copia do meu contrato"
        cy.get('input#firstName').should('be.visible').type('Flavio').should('have.value','Flavio')
        cy.get('input#lastName').should('be.visible').type('Leão').should('have.value','Leão')
        cy.get('input#email').should('be.visible').type('leaogama@gmail.com').should('have.value','leaogama@gmail.com')
        cy.get('#open-text-area').should('be.visible').type(z,{delay:10}).should('have.value', z)
        cy.get('.button').should('be.visible').click()
        cy.get('.success').should('be.visible').should('contain.text', 'sucesso')
    })
it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () =>{
    let z = "Gostaria de receber uma copia do meu contrato"
        cy.get('input#firstName').should('be.visible').type('Flavio').should('have.value','Flavio')
        cy.get('input#lastName').should('be.visible').type('Leão').should('have.value','Leão')
        cy.get('input#email').should('be.visible').type('leaogama@gmailcom').should('have.value','leaogama@gmailcom')
        cy.get('#open-text-area').should('be.visible').type(z,{delay:10}).should('have.value', z)
        cy.get('.button').should('be.visible').click()
        cy.get('.error').should('be.visible').should('contain.text', 'campos')
})

})
