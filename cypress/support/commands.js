/// <reference types="Cypress" />

before(()=>{
cy.visit(Cypress.env('baseUrl'));
cy.viewport(1024, 768)
})

Cypress.Commands.add('login', (emailAddress, password)=>{

})