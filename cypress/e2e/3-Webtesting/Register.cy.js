describe('register using custom command and fixtures', () => {
  it('Berhasil Register', () => { //Test Cases Berhasil Register
    cy.fixture('register.json').then((register) => {
      const newuser = register[0];
    cy.register(newuser.Gender, newuser.FirstName, newuser.LastName, newuser.Email, newuser.Password, newuser.ConfirmPassword)
    cy.url().should('eq','https://demowebshop.tricentis.com/')

  });
});
describe('register using custom command and fixtures', () => {
  it('Register dengan email sama', () => { //Test Cases Register dengan email sama
    cy.fixture('register.json').then((register) => {
      const newuser = register[1];
    cy.register(newuser.Gender, newuser.FirstName, newuser.LastName, newuser.Email, newuser.Password, newuser.ConfirmPassword)
    cy.url().should('eq','https://demowebshop.tricentis.com/')
    cy.contains('The specified email already exists')
  });
});
})
})