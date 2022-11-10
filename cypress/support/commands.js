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
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(txtAjuda){
    let z = txtAjuda
    cy.get('input#firstName').should('be.visible').type('Joao').should('have.value', 'Joao')
    cy.get('input#lastName').should('be.visible').type('Leão').should('have.value', 'Leão')
    cy.get('input#email').should('be.visible').type('leaogama@gmail.com').should('have.value', 'leaogama@gmail.com')
    cy.get('#open-text-area').should('be.visible').type(z, { delay: 0 }).should('have.value', z)
    cy.contains('button', 'enviar', {matchCase: false}).should('be.visible').click()
    

})