class SignUp {
  welcomeSection = ".login-welcome-section";
  loginButton = "#signin_btn";
  createAccountForm = ".card-signin";
  inputFields = "form input";
  passwordEye = ".mat-form-field-suffix";
  joinNowButton = "#submit_btn";

  constructor() {}

  visit() {
    return cy.visit("/signup");
  }

  getWelcomeSection() {
    return cy.get(this.welcomeSection);
  }

  getLoginButton() {
    return cy.get(this.loginButton);
  }

  getCreateAccountForm() {
    return cy.get(this.createAccountForm);
  }

  getNameField() {
    return cy.get(this.inputFields).eq(0);
  }

  getEmailField() {
    return cy.get(this.inputFields).eq(1);
  }

  getPasswordField() {
    return cy.get(this.inputFields).eq(2);
  }

  getPasswordEye() {
    return cy.get(this.passwordEye);
  }

  getJoinNowButton() {
    return cy.get(this.joinNowButton);
  }
}

export default SignUp;
