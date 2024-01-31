class accountCreationSingIn {
  elements = {
    signupName: () => cy.get('[data-qa="signup-name"]'),
    signupEmail: () => cy.get('[data-qa="signup-button"]'),
    btnSignup: () => cy.get('[data-qa="signup-button"]'),
    btnIdGender: () => cy.get("#id_gender1"),
    signuPassword: () => cy.get('[data-qa="password"]'),
    signupDays: () => cy.get('[data-qa="days"]'),
    signupMonths: () => cy.get('[data-qa="months"]'),
    signupYears: () => cy.get('[data-qa="years"]'),
    loginEmail: () => cy.get('[data-qa="login-email"]'),
    loginPassword: () => cy.get('[data-qa="login-password"]'),
    btnLogin: () => cy.get('[data-qa="login-button"]'),
    accountCreated: () => cy.get('[data-qa="account-created"]'),
    btnContinue: () => cy.get('[data-qa="continue-button"]'),
  };
  signupNameType(name) {
    this.elements.signupName().type(name);
  }
  signupEmailType(email) {
    this.elements.signupEmail().type(email);
  }
  signuPasswordType(password) {
    this.elements.signuPassword().type(password);
  }
  signupDaysType(days) {
    this.elements.signupDays().select(days);
  }
  signupMonthsType(months) {
    this.elements.signupMonths().select(months);
  }
  signupYearsType(years) {
    this.elements.signupYears().select(years);
  }
  loginEmailType(email) {
    this.elements.loginEmail().type(email);
  }
  loginPasswordType(pass) {
    this.elements.loginPassword().type(pass);
  }
  btnSignupClick() {
    this.elements.btnSignup().click();
  }
  btnIdGenderSelect() {
    this.elements.btnIdGender().click();
  }
  btnLoginClick() {
    this.elements.btnLogin().click();
  }
  btnContinueClick() {
    this.elements.btnContinue().click();
  }
}

module.exports = new accountCreationSingIn();
