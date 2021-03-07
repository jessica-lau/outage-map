import ChallengeConfirm from "../../pages/elements/challengeConfirmPage";
import emailAndPassword from "../../fixtures/emailAndPassword.json";

describe("If You Can Move Challenge Confirm page", () => {
  const challengeConfirm = new ChallengeConfirm();

  after(() => {
    window.indexedDB.deleteDatabase("firebaseLocalStorageDb");
  });

  context("Logged in user views challenge confirm page", () => {
    before(() => {
      cy.SignIn();
    });

    beforeEach(() => {
      cy.get(".nav-links").contains("My Account").click();
      cy.get("#btnChallengeSignUp").click();
    });

    it("User should be able to type referral email", () => {
      challengeConfirm
        .getEmailInput()
        .eq(1)
        .should("have.attr", "type", "text")
        .type(emailAndPassword.validDummyEmail)
        .focus()
        .blur();
    });

    it("Proceed button is visible and clickable", () => {
      challengeConfirm.getPaymentButton().should("be.visible").click();
    });

    it("Cancel link on page is visible and clickable", () => {
      challengeConfirm.getCancelButton().should("be.visible").click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/account");
      });
    });
  });
});
