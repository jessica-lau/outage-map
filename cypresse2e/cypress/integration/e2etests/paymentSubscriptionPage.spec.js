import PaymentSubscription from "../../pages/elements/paymentSubscriptionPage";

describe("If You Can Move Susbscription Payment pages", () => {
  const paymentSusbcription = new PaymentSubscription();

  after(() => {
    window.indexedDB.deleteDatabase("firebaseLocalStorageDb");
  });
  context("User selects subscription plan on Payment Select page", () => {
    before(() => {
      cy.SignInTwo();
    });

    // beforeEach(() => {
    //   cy.visit("/account");
    // });

    it("Monthly plan button is visible and clickable", () => {
      paymentSusbcription.getSubscribeBtn().click();
      paymentSusbcription
        .getMonthlySubscriptionBtn()
        .should("be.visible")
        .click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("monthly");
      });
      paymentSusbcription.getCancelBtn().click();
    });

    it("Annual plan button is visible and clickable", () => {
      paymentSusbcription.getSubscribeBtn().click();
      paymentSusbcription
        .getYearlySubscriptionBtn()
        .should("be.visible")
        .click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("annual");
      });
      paymentSusbcription.getCancelBtn().click();
    });

    it("Proceed to Payment button for monthly plan on subscription page is visible and clickable", () => {
      paymentSusbcription.getSubscribeBtn().click();
      paymentSusbcription
        .getMonthlySubscriptionBtn()
        .should("be.visible")
        .click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("monthly");
      });
      paymentSusbcription.getAgreeBtn().click();
    });

    it("Proceed to Payment button for annual plan on subscription page is visible and clickable", () => {
      cy.visit("/signin");
      paymentSusbcription.getSubscribeBtn().click();
      paymentSusbcription
        .getYearlySubscriptionBtn()
        .should("be.visible")
        .click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("annual");
      });
      paymentSusbcription.getAgreeBtn().click();
    });
  });
});
