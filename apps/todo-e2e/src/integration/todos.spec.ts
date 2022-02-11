describe('todos', () => {
  beforeEach(() => cy.visit('/'));

  it('should add some todos', () => {
    cy.findByTestId('new-todo-textbox')
      .type('learn testing{enter}')
      .type('be cool{enter}');

    cy.findAllByTestId('todo-line').should('have.length', 2);

    cy.percySnapshot();
  });
});
