class ChallengeConfirm {
  emailInput = "input";
  paymentButton = ".join-btn-two";
  cancelButton = ".cancel";

  constructor() {}

  getEmailInput() {
    return cy.get(this.emailInput);
  }

  getPaymentButton() {
    return cy.get(this.paymentButton);
  }

  getCancelButton() {
    return cy.get(this.cancelButton);
  }
}

export default ChallengeConfirm;
