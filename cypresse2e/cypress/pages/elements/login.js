class Login {
  signUpText = ".login-welcome-section";
  loginCard = ".card-signin";
  signUpButton = ".login-button";
  inputField = "form input";
  loginButton = "#btnLogin";
  forgotPassword = "form .mat-hint";
  errorMessage = "form .error-message";

  constructor() {}

  visit() {
    cy.visit("/signin");
  }

  getSignUpText() {
    return cy.get(this.signUpText);
  }

  getLoginCard() {
    return cy.get(this.loginCard);
  }

  getSignUpButton() {
    return cy.get(this.signUpButton);
  }

  getEmailField() {
    return cy.get(this.inputField).eq(0);
  }

  getPasswordField() {
    return cy.get(this.inputField).eq(1);
  }

  getLoginButton() {
    return cy.get(this.loginButton);
  }

  getForgotPassword() {
    return cy.get(this.forgotPassword);
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }
}

export default Login;
