/// <reference types="cypress" />

describe('project one notes app', () => {
  beforeEach(() => {
    cy.visit('app/index.html')
  })

  it('displays two todo items by default', () => {
    cy.get('h1').should('have.text', 'my casfee project 1')
  })

})
