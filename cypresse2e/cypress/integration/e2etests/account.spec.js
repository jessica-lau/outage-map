import Account from "../../pages/elements/account";

describe("If You Can Move account page", () => {
  const account = new Account();

  after(() => {
    window.indexedDB.deleteDatabase("firebaseLocalStorageDb");
  });

  context("User views account page when not logged in", () => {
    beforeEach(() => {
      account.visit();
    });

    it("User can view account text in section one on account page", () => {
      account
        .getAccountSectionOne()
        .should(
          "contain",
          "We update our website with new features and designs frequently. To get the updates and/or fix any issues, please click on the browser refresh button or open a new browser tab."
        );
    });

    it("User can view Challenge text in section two on account page", () => {
      account
        .getAccountSectionTwo()
        .should("contain", "Challenge Billing")
        .and("contain", "Not active")
        .and("contain", "Challenge Start Date")
        .and("contain", "Challenge End Date")
        .and(
          "contain",
          "Challenge menu link gives you access to the Challenge Dashboard and all of its related materials and content."
        );
    });

    it("User can view Subscription text in section three on account page", () => {
      account
        .getAccountSectionThree()
        .should("contain", "Subscription Billing")
        .and("contain", "Not active")
        .and(
          "contain",
          "Subscribe to the MOVE Monthly or Annual Online Gym Membership!"
        )
        .and(
          "contain",
          "Subscription gives you access to the Home page and 24/7 access to 100+ videos"
        );
    });

    it("User can view Support text in section four on account page", () => {
      account
        .getAccountSectionFour()
        .should("contain", "Support")
        .and(
          "contain",
          "If you have trouble seeing videos or believe your account info is wrong, click Refresh Data data button below. Then click on browser refresh button."
        )
        .and("contain", "For anything else, click Contact Us.");
    });

    it("Early Bird Sign Up Button is viewable and clickable", () => {
      account.getEarlyBirdButton().should("be.visible").click();
    });

    it("View Challenge Info Button is viewable and clickable", () => {
      account.getInfoButton().should("be.visible").click();
    });

    it("View Challenge Transformations Button is viewable and clickable", () => {
      account.getTransformationButtonTwo().should("be.visible").click();
    });

    it("Subscribe Button is viewable and clickable", () => {
      account.getSubscribeButton().should("be.visible").click();
    });

    it("Refresh Data Button is viewable and clickable", () => {
      account.getRefreshDataButton().should("be.visible").click();
    });

    it("First View Challenge Transformations Button is viewable and clickable", () => {
      account.getContactUsButton().should("be.visible").click();
    });
  });

  context("User views account page after logging in", () => {
    before(() => {
      cy.SignIn();
    });

    beforeEach(() => {
      account.visit();
    });

    it("User can view account text in section one on account page", () => {
      account
        .getAccountSectionOne()
        .should("contain", "a@mentorem.com")
        .and(
          "contain",
          "We update our website with new features and designs frequently. To get the updates and/or fix any issues, please click on the browser refresh button or open a new browser tab."
        );
    });

    it("User can view Challenge text in section two on account page", () => {
      account
        .getAccountSectionTwo()
        .should("contain", "Challenge Billing")
        .and("contain", "PAID")
        .and("contain", "Challenge Start Date")
        .and("contain", "Challenge End Date")
        .and(
          "contain",
          "Challenge menu link gives you access to the Challenge Dashboard and all of its related materials and content."
        );
    });

    it("User can view Subscription text in section three on account page", () => {
      account
        .getAccountSectionThree()
        .should("contain", "Subscription Billing")
        .and("contain", "Active")
        .and(
          "contain",
          "You can update or cancel your subscription at anytime by going to the Billing Portal."
        )
        .and(
          "contain",
          "Subscription gives you access to the Home page and 24/7 access to 100+ videos"
        );
    });

    it("User can view Support text in section four on account page", () => {
      account
        .getAccountSectionFour()
        .should("contain", "Support")
        .and(
          "contain",
          "If you have trouble seeing videos or believe your account info is wrong, click Refresh Data data button below. Then click on browser refresh button."
        )
        .and("contain", "For anything else, click Contact Us.");
    });

    it("Challenge Dashboard Button is viewable and clickable", () => {
      account.getDashboardButton().should("be.visible").click();
    });

    it("First View Challenge Transformations Button is viewable and clickable", () => {
      account.getTransformationButtonOne().should("be.visible").click();
    });

    it("Early Bird Sign Up Button is viewable and clickable", () => {
      account.getEarlyBirdButton().should("be.visible").click();
    });

    it("View Challenge Info Button is viewable and clickable", () => {
      account.getInfoButton().should("be.visible").click();
    });

    it("Second View Challenge Transformations Button is viewable and clickable", () => {
      account.getTransformationButtonTwo().should("be.visible").click();
    });

    it("Subscription Billing Portal Button is viewable and clickable", () => {
      account.getBillingPortalButton().should("be.visible").click();
    });

    it("Refresh Data Button is viewable and clickable", () => {
      account.getRefreshDataButton().should("be.visible").click();
    });

    it("First View Challenge Transformations Button is viewable and clickable", () => {
      account.getContactUsButton().should("be.visible").click();
    });
  });
});
