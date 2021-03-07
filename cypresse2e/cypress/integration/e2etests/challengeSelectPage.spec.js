import ChallengeSelect from "../../pages/elements/challengeSelectPage";

describe("If You Can Move Challenge Select page", () => {
  const challengeSelect = new ChallengeSelect();
  after(() => {
    window.indexedDB.deleteDatabase("firebaseLocalStorageDb");
  });
  context("User selects plan on Challenge Select page", () => {
    before(() => {
      cy.SignInTwo();
    });

    it("Gym Access and Challenge Plan button is visible and clickable", () => {
      challengeSelect.getEarlyBirdBtn().click();
      challengeSelect.getGymAndChallengeBtn().should("be.visible").click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/challenge-confirm");
      });
      cy.get(".cancel").click();
    });

    it("Challenge Plan button is visible and clickable", () => {
      challengeSelect.getChallengeBtn().should("be.visible").click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/challenge-confirm");
      });
    });
  });
});
