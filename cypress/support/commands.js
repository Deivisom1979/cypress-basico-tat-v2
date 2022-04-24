Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('John')
    cy.get('#lastName').type('Doe')
    cy.get('#email').type('JohnDoe@email.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})