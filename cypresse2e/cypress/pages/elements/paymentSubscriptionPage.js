class PaymentSubscription {
  subscribeButton = "#btnSubscribe";
  paymentSubscriptionButton = ".get-started-outer-redsn .join-btn-two";
  agreeButton = ".join-btn-two";
  cancelButton = ".cancel";

  constructor() {}

  getSubscribeBtn() {
    return cy.get(this.subscribeButton);
  }

  getMonthlySubscriptionBtn() {
    return cy.get(this.paymentSubscriptionButton).eq(0);
  }

  getYearlySubscriptionBtn() {
    return cy.get(this.paymentSubscriptionButton).eq(1);
  }

  getAgreeBtn() {
    return cy.get(this.agreeButton);
  }

  getCancelBtn() {
    return cy.get(this.cancelButton);
  }
}

export default PaymentSubscription;
