describe('todos', () => {
  beforeEach(() => cy.visit('/'));

  it('should add some todos', () => {
    cy.findByTestId('new-todo-textbox')
      .type('learn testing{enter}')
      .type('be cool{enter}');

    cy.findAllByTestId('todo-line').should('have.length', 2);
  });

  context('when no todos', () => {
    it('should hide list', () => {
      cy.findByTestId('todo-list-body').should('not.exist');
      cy.findAllByTestId('todo-line').should('not.exist');
      cy.findByTestId('todo-list-footer').should('not.exist');
    });
  });
});
