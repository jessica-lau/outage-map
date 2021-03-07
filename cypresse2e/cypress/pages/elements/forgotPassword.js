class ForgotPassword {
  resetPasswordCard = ".section-reset-password";
  inputField = "section input";
  resetPasswordButton = "#btnResetPassword";

  constructor() {}

  visit() {
    cy.visit("/reset-password");
  }

  getResetPasswordCard() {
    return cy.get(this.resetPasswordCard);
  }

  getInputField() {
    return cy.get(this.inputField);
  }

  getResetPasswordButton() {
    return cy.get(this.resetPasswordButton);
  }
}

export default ForgotPassword;
