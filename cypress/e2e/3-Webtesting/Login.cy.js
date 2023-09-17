describe('login using custom command and fixtures', () => {
    it('Berhasil login', () => { //Test Cases Berhasil login
      cy.fixture('login.json').then((login) => {
        const datauser = login[0];
      cy.login(datauser.text, datauser.password, datauser.RememberMe)
      cy.url().should('eq','https://demowebshop.tricentis.com/')
  
    });
  });
  describe('login using custom command and fixtures', () => {
    it('Username Kosong', () => { //Test Cases gagal login username kosong
      cy.fixture('login.json').then((login) => {
        const datauser = login[1];
      cy.login(datauser.text, datauser.password, datauser.RememberMe)
      cy.url().should('eq','https://demowebshop.tricentis.com/')
  
    });
  });
  describe('login using custom command and fixtures', () => {
    it('Password Kosong', () => { //Test Cases gagal login Password kosong
      cy.fixture('login.json').then((login) => {
        const datauser = login[2];
      cy.login(datauser.text, datauser.password, datauser.RememberMe)
      cy.url().should('eq','https://demowebshop.tricentis.com/')
  
    });
  });
  describe('login using custom command and fixtures', () => {
    it('Username dan Password Kosong', () => { //Test Cases gagal login Username & Password kosong
      cy.fixture('login.json').then((login) => {
        const datauser = login[3];
      cy.login(datauser.text, datauser.password, datauser.RememberMe)
      cy.url().should('eq','https://demowebshop.tricentis.com/')
  
    });
  });
  describe('login using custom command and fixtures', () => {
    it('Username dan Password tida sesuai', () => { //Test Cases gagal login Username & Password tidak sesuai
      cy.fixture('login.json').then((login) => {
        const datauser = login[4];
      cy.login(datauser.text, datauser.password, datauser.RememberMe)
      cy.url().should('eq','https://demowebshop.tricentis.com/')
  
    });
  });
})
})
})
})
})