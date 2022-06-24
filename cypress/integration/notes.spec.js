/// <reference types="cypress" />

describe('project one notes app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3333')
  })

  it('lists todos', () => {
    cy.get('#tasks .task-c2').contains('Geburi Sarah')
    cy.get('#tasks .task-c2').contains('Ferien')
    cy.get('#tasks .task-c2').contains('Einkaufen')
  })

})
