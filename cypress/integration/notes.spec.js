/// <reference types="cypress" />

describe('project one notes app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3333')
  })

  it('displays two todo items by default', () => {
    cy.get('h1').should('have.text', 'Note App')
  })

})
