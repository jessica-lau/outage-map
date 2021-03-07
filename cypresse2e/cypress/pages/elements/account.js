class Account {
  accountSection = ".billing";
  dashboardButton = "#btnChallengeDashboard";
  transformationButtonOne = "#btnChallengeTransformations";
  earlyBirdButton = "#btnChallengeSignUp";
  infoButton = "#btnChallengeInfo";
  transformationButtonTwo = "#btnChallengeTransformations2";
  billingPortalButton = "#btnBillingPortal";
  refreshDataButton = "#btnRefreshData";
  contactUsButton = "#btnContactUs";
  subscribeButton = "#btnSubscribe";

  constructor() {}

  visit() {
    cy.visit("/account");
  }

  getAccountSectionOne() {
    return cy.get(this.accountSection).eq(0);
  }

  getAccountSectionTwo() {
    return cy.get(this.accountSection).eq(1);
  }

  getAccountSectionThree() {
    return cy.get(this.accountSection).eq(2);
  }

  getAccountSectionFour() {
    return cy.get(this.accountSection).eq(3);
  }

  getDashboardButton() {
    return cy.get(this.dashboardButton);
  }

  getTransformationButtonOne() {
    return cy.get(this.transformationButtonOne);
  }

  getEarlyBirdButton() {
    return cy.get(this.earlyBirdButton);
  }

  getInfoButton() {
    return cy.get(this.infoButton);
  }

  getTransformationButtonTwo() {
    return cy.get(this.transformationButtonTwo);
  }

  getBillingPortalButton() {
    return cy.get(this.billingPortalButton);
  }

  getRefreshDataButton() {
    return cy.get(this.refreshDataButton);
  }

  getContactUsButton() {
    return cy.get(this.contactUsButton);
  }

  getSubscribeButton() {
    return cy.get(this.subscribeButton);
  }
}

export default Account;
