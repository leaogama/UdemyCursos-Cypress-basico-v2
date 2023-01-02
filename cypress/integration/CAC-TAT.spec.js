/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {

    beforeEach(() => {
        cy.visit('../src/index.html')
    })

    it('ex00 verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('ex01 Preencher campos obrigatórios e enviar formulário', () => {
        let z = "Gostaria de receber uma copia do meu contrato"
        cy.get('input#firstName').should('be.visible').type('Joao').should('have.value', 'Joao')
        cy.get('input#lastName').should('be.visible').type('Leão').should('have.value', 'Leão')
        cy.get('input#email').should('be.visible').type('leaogama@gmail.com').should('have.value', 'leaogama@gmail.com')
        cy.get('#open-text-area').should('be.visible').type(z, { delay: 0 }).should('have.value', z)
        cy.contains('button', 'enviar', { matchCase: false }).should('be.visible').click()
        cy.get('.success').should('be.visible').should('contain.text', 'sucesso')
    })
    it('ex02 exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        let z = "Gostaria de receber uma copia do meu contrato"
        cy.get('input#firstName').should('be.visible').type('Joao').should('have.value', 'Joao')
        cy.get('input#lastName').should('be.visible').type('Leão').should('have.value', 'Leão')
        cy.get('input#email').should('be.visible').type('leaogama@gmailcom').should('have.value', 'leaogama@gmailcom')
        cy.get('#open-text-area').should('be.visible').type(z, { delay: 0 }).should('have.value', z)
        cy.contains('button', 'enviar', { matchCase: false }).should('be.visible').click()
        cy.get('.error').should('be.visible').should('contain.text', 'campos')
    })

    it('ex03 Erro- ele aceita numeros e "." no campo Telefone', () => {
        // let z = "Gostaria de receber uma copia do meu contrato"
        // cy.get('input#firstName').should('be.visible').type('Flavio').should('have.value', 'Flavio')
        // cy.get('input#lastName').should('be.visible').type('Leão').should('have.value', 'Leão')
        // cy.get('input#email').should('be.visible').type('leaogama@gmail.com').should('have.value', 'leaogama@gmail.com')
        // cy.get('#open-text-area').should('be.visible').type(z, { delay: 0 }).should('have.value', z)
        // cy.get('.button').should('be.visible').click()
        cy.get('#phone').should('be.visible').type('abcdfgh/@#(51)9.9').should("have.value", '519.9')
    })

    it('ex04 exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        let z = "Gostaria de receber uma copia do meu contrato"
        cy.get('input#firstName').should('be.visible').type('Flavio').should('have.value', 'Flavio')
        cy.get('input#lastName').should('be.visible').type('Leão').should('have.value', 'Leão')
        cy.get('input#email').should('be.visible').type('leaogama@gmail.com').should('have.value', 'leaogama@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#phone').should('be.visible').type('abcdfgh/@#').should("have.value", '')
        cy.get('#open-text-area').should('be.visible').type(z, { delay: 1 }).should('have.value', z)
        cy.contains('button', 'enviar', { matchCase: false }).should('be.visible').click()
        cy.get('.error').should('be.visible').should('contain.text', 'campos')

    })

    it('ex05 preenche e limpa os campos nome, sobrenome, email e telefone', () => {
        cy.get('input#firstName').should('be.visible').type('Joao').should('have.value', 'Joao').clear().should('not.have.value')
        cy.get('input#lastName').should('be.visible').type('Leão').should('have.value', 'Leão').clear().should('not.have.value')
        cy.get('input#email').should('be.visible').type('leaogama@gmail.com').should('have.value', 'leaogama@gmail.com').clear().should('not.have.value')
        //cy.get('#phone-checkbox').click()
        cy.get('#phone').should('be.visible').type('999999').should("have.value", '999999').clear().should('not.have.value')
        //cy.get('#open-text-area').should('be.visible').type(z, { delay: 100 }).should('have.value', z)


    })
    it('ex06 exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {

        cy.contains('button', 'enviar', { matchCase: false }).should('be.visible').click()
        cy.get('.error').should('be.visible').should('contain.text', 'campos')
    })

    it('ct07-Envia o formulario com sucesso usando comando customizado.', () => {
        let z = "Gostaria de receber uma copia do meu contrato"
        cy.fillMandatoryFieldsAndSubmit(z)
        cy.get('.success').should('be.visible').should('contain.text', 'sucesso')
    });

    it('ct08-Seleciona um produto (YouTube) por seu TEXTO', () => {
        const product = 'YouTube'
        cy.get('#product').select(product)
        cy.get('#product').should('have.value', 'youtube')
    });

    it('ct09-Seleciona um produto (Mentoria) por seu VALOR', () => {
        const product = 'mentoria'
        cy.get('#product').select(product)
        cy.get('#product').should('have.value', product)
    });

    it('ct10-Seleciona um produto (Blog) por seu índice', () => {
        const product = 1
        cy.get('#product').select(product)
        cy.get('#product').should('have.value', 'blog')
    });

    it('seleciona toodos os elementos do tipo radio', () => {
        // cy.get('[type="radio"]').check()
        //  cy.get('[type="radio"]').should('contain.value', 'feedback')


        cy.get('[type="checkbox"]').check('email')
    })

    it('Marca o tipo de atendimento "feedback"', function () {
        cy.get('input[type="radio"][value="feedback"').check().should('have.value','feedback')

    })

    it.only('Marca cada tipo de atendimento', ()=> {
        cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each(function($radio){
            cy.wrap($radio).check().should('be.checked')
        })

    })

    // cy.get('div').contains('capital sentence', { matchCase: false })
    // cy.contains('Delete User').click().contains('Yes, Delete!').click()
    //cy.get('#password')
    //   .type(Cypress.env('user_password'), { log: false })
    // cy.contains('Login').click()
})
